export interface Blog {
    name: string;
    title: string;
    created_date: string;
    likes: number;
    comments: Comment[];
    blogs: any;
}

export interface Comment {
    comment: string;
    user: string;
}