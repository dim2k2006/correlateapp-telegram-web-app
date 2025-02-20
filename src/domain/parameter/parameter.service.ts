import { User, Parameter, Measurement } from './parameter.model';

export interface ParameterService {
  getUserByExternalId(externalId: string): Promise<User>;
  listParametersByUser(userId: string): Promise<Parameter[]>;
  listMeasurementsByParameter(parameterId: string): Promise<Measurement[]>;
}
