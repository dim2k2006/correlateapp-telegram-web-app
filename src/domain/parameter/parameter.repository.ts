import { User, Parameter, Measurement } from './parameter.model';

export interface ParameterRepository {
  getUserByExternalId(externalId: string): Promise<User>;
  listParametersByUser(userId: string): Promise<Parameter[]>;
  listMeasurementsByParameter(parameterId: string): Promise<Measurement[]>;
}
