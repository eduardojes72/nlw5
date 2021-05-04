import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();
/**
 * Tipos de parametos
 * Routes Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * QUery Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => {
 * 
 * }
 */

const settingsController = new SettingsController

routes.post("/settings", settingsController.create)

routes.get("/", async (request, response) => {
 return response.json({ok:true})
})

export { routes }