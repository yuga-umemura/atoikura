import { createClient } from "@connectrpc/connect";
import { transport } from "./transoport";
import { HealthService } from "@gen/atoikura/v1/health_pb";

export const healthClient = createClient(HealthService, transport);
