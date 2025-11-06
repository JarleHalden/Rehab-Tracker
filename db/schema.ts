import {
  pgTable,
  uuid,
  text,
  timestamp,
  doublePrecision,
  jsonb,
  boolean,
  date,
} from "drizzle-orm/pg-core";

export const org = pgTable("org", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
});

export const user = pgTable("user_account", {
  id: uuid("id").defaultRandom().primaryKey(),
  orgId: uuid("org_id")
    .notNull()
    .references(() => org.id, { onDelete: "cascade" }),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  role: text("role").default("physiotherapist").notNull(),
});

export const patients = pgTable("patient", {
  id: uuid("id").defaultRandom().primaryKey(),
  orgId: uuid("org_id")
    .notNull()
    .references(() => org.id, { onDelete: "cascade" }),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  sport: text("sport"),
  injury: text("injury"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const testDefinitions = pgTable("test_definition", {
  id: uuid("id").defaultRandom().primaryKey(),
  orgId: uuid("org_id")
    .notNull()
    .references(() => org.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  unit: text("unit"),
});

export const testResults = pgTable("test_result", {
  id: uuid("id").defaultRandom().primaryKey(),
  patientId: uuid("patient_id")
    .notNull()
    .references(() => patients.id, { onDelete: "cascade" }),
  orgId: uuid("org_id")
    .notNull()
    .references(() => org.id, { onDelete: "cascade" }),
  testId: uuid("test_id")
    .notNull()
    .references(() => testDefinitions.id, { onDelete: "cascade" }),
  valueNumeric: doublePrecision("value_numeric").notNull(),
  meta: jsonb("meta").$type<Record<string, unknown>>().default({}),
  measuredAt: timestamp("measured_at", { withTimezone: true }).notNull(),
});

export const rehabGoals = pgTable("rehab_goal", {
  id: uuid("id").defaultRandom().primaryKey(),
  orgId: uuid("org_id")
    .notNull()
    .references(() => org.id, { onDelete: "cascade" }),
  patientId: uuid("patient_id")
    .notNull()
    .references(() => patients.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
  targetDate: date("target_date"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  completed: boolean("completed").default(false).notNull(),
});

export const sessions = pgTable("session", {
  id: uuid("id").defaultRandom().primaryKey(),
  orgId: uuid("org_id")
    .notNull()
    .references(() => org.id, { onDelete: "cascade" }),
  patientId: uuid("patient_id")
    .notNull()
    .references(() => patients.id, { onDelete: "cascade" }),
  plan: text("plan"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
