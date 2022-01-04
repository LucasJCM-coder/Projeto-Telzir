import express from 'express';

import CallCostsController from '../src/controller/CallCostsController';
import AvaiableDDDController from '../src/controller/AvaiableDDDController';

const routes = express.Router();

const CostsCall = new CallCostsController();
const DDDAvaiables = new AvaiableDDDController();

routes.get('/cost/source=:source&destiny=:destiny&minutes=:minutes&plan=:plan', CostsCall.index);
routes.get('/avaiables/source=:source', DDDAvaiables.index);

export default routes;