// Generated by Xata Codegen 0.23.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "offer",
    columns: [
      { name: "name", type: "string", unique: true },
      { name: "category", type: "string", defaultValue: "otros" },
      { name: "price", type: "float", notNull: true, defaultValue: "00.00" },
      { name: "description", type: "multiple" },
      { name: "image", type: "string", notNull: true, defaultValue: "" },
    ],
  },
  {
    name: "users",
    columns: [
      { name: "name", type: "string", notNull: true, defaultValue: "admin" },
      {
        name: "password",
        type: "string",
        notNull: true,
        defaultValue: "admin",
      },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Offer = InferredTypes["offer"];
export type OfferRecord = Offer & XataRecord;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type DatabaseSchema = {
  offer: OfferRecord;
  users: UsersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Daniel-Caluff-s-workspace-6q6mfc.us-east-1.xata.sh/db/black-out",
  enableBrowser: true,
  apiKey: process.env.XATA_API_KEY+""
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
