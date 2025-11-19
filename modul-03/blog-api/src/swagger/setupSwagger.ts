import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export function setupSwagger(app: Express) {
  const options: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Blog API Documentation",
        version: "1.0.0",
        description:
          "REST API untuk Blog App menggunakan Express + TypeScript + Prisma",
      },
      servers: [
        {
          url: "http://localhost:8000",
          description: "Local server",
        },
      ],
    },
    apis: ["./src/controllers/*.ts", "./src/routers/*.ts"], // <-- auto-scan
  };

  const specs = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}
