import { User } from './auth';

export interface Animal {
    id: number;
    name: string;
    species: string;
    description?: string;
    race?: string;
    gender: string;
    location: string;
    photo: string;
    birthday?: string;
    availability: boolean;
    user: User;
    user_id: number;
}

export interface CardProps {
    onReload?: boolean;
    animals?: Animal[];
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    animal: Animal;
}

export interface AnimalContextType {
    animalData: Animal[] | undefined;
    setAnimalData: (data: Animal[]) => void;
}