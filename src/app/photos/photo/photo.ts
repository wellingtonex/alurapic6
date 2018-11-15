export interface Photo {

  id: number;
  postDate: Date;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}
