import {Request, response, Response} from 'express';
import { SettingsService } from '../services/SettingsService';


class SettingsController {
    async create(req: Request, res: Response) {
        try {
            const { chat, username } = req.body;
            const settingsService = new SettingsService();

            const settings = await settingsService.create({chat, username})

            return res.json(settings);
        } catch (err) {
            return res.status(400).json({message: err.message})
           
        }
    }
}

export { SettingsController };