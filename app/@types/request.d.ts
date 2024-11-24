export interface Request {
  id: number;
  user_id: number;
  animal_id: number;
  date: string;
  status: string;
  user: {
      name: string;
  };
  animal: {
      name: string;
  };
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