import Express from "express";
import {contentSecurityPolicy, crossOriginEmbedderPolicy, crossOriginOpenerPolicy, crossOriginResourcePolicy, dnsPrefetchControl, expectCt, frameguard, hidePoweredBy, hsts, ieNoOpen, noSniff, originAgentCluster, permittedCrossDomainPolicies, referrerPolicy, xssFilter} from "helmet";
import CORS from "cors";
import dotenv from "dotenv";
import path from "node:path";
import { VentContext } from "./Bot";
import NodeCache from "node-cache";
import ms from "ms";

// internal caching
const cache = new NodeCache({stdTTL: Math.round(ms("15m") / 1000)});

// secret from .env
const secret = dotenv.config({path: path.join(__dirname, "/.env")});
if (!secret?.parsed || secret.error) {
  throw secret;
};

const PORT = Number(secret.parsed["API_PORT"]);
const cors = CORS({origin: true});
const app = Express();

// privacy essentials
app
.use(contentSecurityPolicy()).use(crossOriginEmbedderPolicy()).use(crossOriginOpenerPolicy()).use(crossOriginResourcePolicy()).use(dnsPrefetchControl()).use(expectCt()).use(frameguard()).use(hidePoweredBy()).use(hsts()).use(ieNoOpen()).use(noSniff()).use(originAgentCluster()).use(permittedCrossDomainPolicies()).use(referrerPolicy()).use(xssFilter())
.use(cors)
.options('*', cors);

app.get("/", (req, res) => res.send("why do you even bother checking in here."));

app.get("/vent", async (_, res) => {
  try {
    const ventCache = cache.get<string>("vent");
    if (ventCache) {
      return res.json(JSON.parse(ventCache));
    } else {
      const allVenting = await VentContext.findAll();
      cache.set("vent", JSON.stringify(allVenting));
      if (!allVenting?.length) return res.json([]);

      return res.json(allVenting);
    };
  } catch (error) {
    console.error(error);
    return res.status(500).send("Backend server was interrupted.");
  };
});

export default app.listen(PORT, () => {
  console.log(`API: Ready, connected through ${PORT}`);
});