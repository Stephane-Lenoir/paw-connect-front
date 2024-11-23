export interface Request {
  id: string | number;
  userId: string | number;
  animalId: string | number;
  status: string;
  message?: string;
}

export interface AccommodationFormData extends Partial<Request> {
  name: string;
  firstname: string;
  email: string;
  animalName: string;
  animalRace: string;
  date: string;
  animal_id: number;
}