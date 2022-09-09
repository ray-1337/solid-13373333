import {Client, CommandInteraction, Constants, ModalSubmitInteraction} from "oceanic.js";
import dotenv from "dotenv";
import path from "node:path";
import {Sequelize, DataTypes} from "sequelize";
import { marked } from "marked";
import { readFileSync } from "node:fs";

// dayjs
import dayjsUTC from "dayjs/plugin/utc";
import dayjsTZ from "dayjs/plugin/timezone";
import dayjs from "dayjs";
dayjs.extend(dayjsUTC);
dayjs.extend(dayjsTZ);

// secret from .env
const secret = dotenv.config({path: path.join(__dirname, "/.env")});
if (!secret?.parsed || secret.error) {
  throw secret;
};

// db
export const sequelize = new Sequelize({
  dialect: "postgres",
  password: secret.parsed["POSTGRES_PASS"],
  username: secret.parsed["POSTGRES_USER"],
  port: +secret.parsed["POSTGRES_PORT"],
  database: secret.parsed["POSTGRES_DATABASE"],
  host: secret.parsed["POSTGRES_HOST"],
  dialectOptions: {
    ssl: {
      ca: readFileSync(path.join(__dirname, secret.parsed["POSTGRES_CRT_FILENAME"]))
    }
  }
});

export const VentContext = sequelize.define("vents", {
  date: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
  message: { type: DataTypes.STRING }
}, {
  createdAt: false,
  updatedAt: false,
  deletedAt: false
});

// bot client
const client = new Client({
  auth: `Bot ${secret.parsed["BOT_TOKEN"]}`
});

client.on("ready", async () => {
  try {
    // add /vent
    await client.application.bulkEditGuildCommands(secret.parsed!["GUILD_ID"], [{
      name: "vent",
      type: Constants.ApplicationCommandTypes.CHAT_INPUT,
      description: "Upload venting message to website."
    }]);

    // initialize database
    await sequelize.authenticate();
    VentContext.removeAttribute("id");

    console.log("Bot: Ready.");
  } catch (error) {
    throw error;
  };
});

client.on("interactionCreate", async (interaction) => {
  const ventCustomIDModal = "vent_modal";

  try {
    if (interaction instanceof CommandInteraction) {
      if (interaction.data.name == "vent") {
        return interaction.createModal({
          title: "Vent Modal",
          customID: ventCustomIDModal,
          components: [{
            type: Constants.ComponentTypes.ACTION_ROW,
            components: [{
              label: "Message",
              style: Constants.TextInputStyles.PARAGRAPH,
              minLength: 1,
              // @ts-ignore
              maxLength: 2048,
              required: true, type: Constants.ComponentTypes.TEXT_INPUT,
              customID: "vent_message"
            }]
          }]
        });
      };
    };

    if (interaction instanceof ModalSubmitInteraction) {
      await interaction.defer();

      if (interaction.data.customID == ventCustomIDModal) {
        const message = interaction.data.components[0].components[0]?.value;
        if (!message) return interaction.createMessage({content: "Invalid vent message value."});
        
        await VentContext.create({
          date: dayjs().tz("Asia/Kuala_Lumpur").toDate(),
          message: marked.parseInline(message, { gfm: true, breaks: true })
        });

        return interaction.createMessage({content: "Successfully created a new vent."});
      };
    };
  } catch (error) {
    console.error(error);
    return;
  };
});

export default client.connect();