export interface LoginFormData {
    email: string;
    password: string;
  }

export interface RegisterFormData {
    email: string;
    password: string;
    password2: string;
}

export interface ArticleObj {
  title: string;
  url: string;
  urlToImage: string;
 
}

export interface ArticleProps {
  art: ArticleObj;
  key: string;
}

export interface UserObj {
  email: string;
  uid: string;
}