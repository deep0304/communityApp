// models.ts
import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
  name: "User",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
      nullable: true,
    },
    email: {
      type: "varchar",
      unique: true,
    },
    emailVerified: {
      type: "timestamp",
      nullable: true,
    },
    image: {
      type: "varchar",
      nullable: true,
    },
    // Add custom fields here
    bio: {
      type: "text",
      nullable: true,
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updatedAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
});

export const Account = new EntitySchema({
  name: "Account",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    userId: {
      type: "int",
    },
    providerId: {
      type: "varchar",
    },
    providerType: {
      type: "varchar",
    },
    providerAccountId: {
      type: "varchar",
    },
    refreshToken: {
      type: "text",
      nullable: true,
    },
    accessToken: {
      type: "text",
      nullable: true,
    },
    accessTokenExpires: {
      type: "timestamp",
      nullable: true,
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updatedAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
});

export const Session = new EntitySchema({
  name: "Session",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    userId: {
      type: "int",
    },
    expires: {
      type: "timestamp",
    },
    sessionToken: {
      type: "varchar",
    },
    accessToken: {
      type: "varchar",
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updatedAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
});

export const VerificationRequest = new EntitySchema({
  name: "VerificationRequest",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    identifier: {
      type: "varchar",
    },
    token: {
      type: "varchar",
    },
    expires: {
      type: "timestamp",
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updatedAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
});
