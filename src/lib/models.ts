export interface ContactRequest {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface Post {
  title: string;
  slug: string;
  description?: string;
  date: Date;
  preview?: string;
  body?: string;
}
