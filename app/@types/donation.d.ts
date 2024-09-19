export interface Donation {
    id: string;
    amount: number;
    donorName: string;
    donorEmail: string;
    message?: string;
    userId: string;
    associationId: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface DonationFormData {
    amount: string;
    donorName: string;
    donorEmail: string;
    message: string;
    userId: string;
  }
  
  export interface Association {
    id: string;
    name: string;
    email: string;
  }
  
  export interface StripeSessionData {
    amount: number;
    userId: string;
    donorName: string;
    donorEmail: string;
    message: string;
    associationId: string;
  }
  
  export interface DonationDetails {
    amount: number;
    associationName: string;
  }
  
  export interface DonationCheckResponse {
    donation: DonationDetails;
  }