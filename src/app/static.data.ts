import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StaticData {
    constructor() {
    }

    getBlogData() {
        return [{
            "name": "Advika Reddy",
            "title": "Second Blog Post",
            "created_date": "2022-01-05",
            "likes": 5,
            "comments": [
                {
                    "user": "Aarav",
                    "comment": "Interesting read."
                }
            ],
            "blogs": [
                {
                    "title": "Understanding RESTful APIs",
                    "url": "https://example.com/restful-apis"
                }
            ]
        },
            {
                "name": "Riya Gupta",
                "title": "Third Blog Post",
                "created_date": "2022-01-10",
                "likes": 8,
                "comments": [
                    {
                        "user": "Dhruv",
                        "comment": "Insightful article."
                    }
                ],
                "blogs": [
                    {
                        "title": "Getting Started with Node.js",
                        "url": "https://example.com/nodejs-introduction"
                    }
                ]
            },
            {
                "name": "Aaradhya Sharma",
                "title": "Fourth Blog Post",
                "created_date": "2022-01-15",
                "likes": 12,
                "comments": [
                    {
                        "user": "Ishaan",
                        "comment": "I learned a lot from this."
                    },
                    {
                        "user": "Sia",
                        "comment": "Well explained."
                    }
                ],
                "blogs": [
                    {
                        "title": "Introduction to CSS",
                        "url": "https://example.com/css-introduction"
                    }
                ]
            },
            {
                "name": "Vihaan Kumar",
                "title": "Fifth Blog Post",
                "created_date": "2022-01-20",
                "likes": 7,
                "comments": [
                    {
                        "user": "Myra",
                        "comment": "Nice post!"
                    }
                ],
                "blogs": [
                    {
                        "title": "JavaScript Fundamentals",
                        "url": "https://example.com/js-fundamentals"
                    }
                ]
            },
            {
                "name": "Ananya Singh",
                "title": "Sixth Blog Post",
                "created_date": "2022-01-25",
                "likes": 15,
                "comments": [
                    {
                        "user": "Rudra",
                        "comment": "Interesting topic."
                    },
                    {
                        "user": "Aditi",
                        "comment": "Well written article."
                    }
                ],
                "blogs": [
                    {
                        "title": "Advanced CSS Techniques",
                        "url": "https://example.com/advanced-css"
                    }
                ]
            },
            {
                "name": "Kabir Tiwari",
                "title": "Seventh Blog Post",
                "created_date": "2022-01-30",
                "likes": 20,
                "comments": [
                    {
                        "user": "Ishaan",
                        "comment": "I found this very helpful."
                    },
                    {
                        "user": "Saanvi",
                        "comment": "Thank you for sharing."
                    }
                ],
                "blogs": [
                    {
                        "title": "JavaScript Frameworks Comparison",
                        "url": "https://example.com/js-frameworks"
                    }
                ]
            },
            {
                "name": "Ishani Nair",
                "title": "Eighth Blog Post",
                "created_date": "2022-02-05",
                "likes": 18,
                "comments": [
                    {
                        "user": "Vivaan",
                        "comment": "Great insights!"
                    },
                    {
                        "user": "Veer",
                        "comment": "I agree with your points."
                    }
                ],
                "blogs": [
                    {
                        "title": "Introduction to React",
                        "url": "https://example.com/react-introduction"
                    }
                ]
            },
            {
                "name": "Arjun Gupta",
                "title": "Ninth Blog Post",
                "created_date": "2022-02-10",
                "likes": 25,
                "comments": [
                    {
                        "user": "Meera",
                        "comment": "Well researched."
                    },
                    {
                        "user": "Prisha",
                        "comment": "Informative post."
                    }
                ],
                "blogs": [
                    {
                        "title": "Python Basics",
                        "url": "https://example.com/python-basics"
                    }
                ]
            },
            {
                "name": "Saanvi Patel",
                "title": "Tenth Blog Post",
                "created_date": "2022-02-15",
                "likes": 30,
                "comments": [
                    {
                        "user": "Vihaan",
                        "comment": "I enjoyed reading this."
                    },
                    {
                        "user": "Ansh",
                        "comment": "Thank you for sharing your knowledge."
                    }
                ],
                "blogs": [
                    {
                        "title": "Advanced JavaScript Concepts",
                        "url": "https://example.com/advanced-js"
                    }
                ]
            },
            {
                "name": "John Doe",
                "title": "First Blog Post",
                "created_date": "2022-01-01",
                "likes": 10,
                "comments": [
                    {
                        "user": "Alice",
                        "comment": "Great post!"
                    },
                    {
                        "user": "Bob",
                        "comment": "I agree, well written."
                    }
                ],
                "blogs": [
                    {
                        "title": "Introduction to JSON",
                        "url": "https://example.com/json-introduction"
                    },
                    {
                        "title": "Working with Arrays in JavaScript",
                        "url": "https://example.com/js-arrays"
                    }
                ]
            },
            {
                "name": "Jane Smith",
                "title": "Second Blog Post",
                "created_date": "2022-01-05",
                "likes": 5,
                "comments": [
                    {
                        "user": "Charlie",
                        "comment": "Interesting read."
                    }
                ],
                "blogs": [
                    {
                        "title": "Understanding RESTful APIs",
                        "url": "https://example.com/restful-apis"
                    }
                ]
            },
            {
                "name": "Emily Johnson",
                "title": "Third Blog Post",
                "created_date": "2022-01-10",
                "likes": 8,
                "comments": [
                    {
                        "user": "David",
                        "comment": "Insightful article."
                    }
                ],
                "blogs": [
                    {
                        "title": "Getting Started with Node.js",
                        "url": "https://example.com/nodejs-introduction"
                    }
                ]
            },
            {
                "name": "Michael Brown",
                "title": "Fourth Blog Post",
                "created_date": "2022-01-15",
                "likes": 12,
                "comments": [
                    {
                        "user": "Emma",
                        "comment": "I learned a lot from this."
                    },
                    {
                        "user": "James",
                        "comment": "Well explained."
                    }
                ],
                "blogs": [
                    {
                        "title": "Introduction to CSS",
                        "url": "https://example.com/css-introduction"
                    }
                ]
            },
            {
                "name": "Olivia Wilson",
                "title": "Fifth Blog Post",
                "created_date": "2022-01-20",
                "likes": 7,
                "comments": [
                    {
                        "user": "Sophia",
                        "comment": "Nice post!"
                    }
                ],
                "blogs": [
                    {
                        "title": "JavaScript Fundamentals",
                        "url": "https://example.com/js-fundamentals"
                    }
                ]
            },
            {
                "name": "Ethan Miller",
                "title": "Sixth Blog Post",
                "created_date": "2022-01-25",
                "likes": 15,
                "comments": [
                    {
                        "user": "Liam",
                        "comment": "Interesting topic."
                    },
                    {
                        "user": "Mia",
                        "comment": "Well written article."
                    }
                ],
                "blogs": [
                    {
                        "title": "Advanced CSS Techniques",
                        "url": "https://example.com/advanced-css"
                    }
                ]
            },
            {
                "name": "Ava Johnson",
                "title": "Seventh Blog Post",
                "created_date": "2022-01-30",
                "likes": 20,
                "comments": [
                    {
                        "user": "Noah",
                        "comment": "I found this very helpful."
                    },
                    {
                        "user": "Emma",
                        "comment": "Thank you for sharing."
                    }
                ],
                "blogs": [
                    {
                        "title": "JavaScript Frameworks Comparison",
                        "url": "https://example.com/js-frameworks"
                    }
                ]
            },
            {
                "name": "Liam Smith",
                "title": "Eighth Blog Post",
                "created_date": "2022-02-05",
                "likes": 18,
                "comments": [
                    {
                        "user": "Olivia",
                        "comment": "Great insights!"
                    },
                    {
                        "user": "Lucas",
                        "comment": "I agree with your points."
                    }
                ],
                "blogs": [
                    {
                        "title": "Introduction to React",
                        "url": "https://example.com/react-introduction"
                    }
                ]
            },
            {
                "name": "Sophia Brown",
                "title": "Ninth Blog Post",
                "created_date": "2022-02-10",
                "likes": 25,
                "comments": [
                    {
                        "user": "Mason",
                        "comment": "Well researched."
                    },
                    {
                        "user": "Charlotte",
                        "comment": "Informative post."
                    }
                ],
                "blogs": [
                    {
                        "title": "Python Basics",
                        "url": "https://example.com/python-basics"
                    }
                ]
            },
            {
                "name": "Noah Wilson",
                "title": "Tenth Blog Post",
                "created_date": "2022-02-15",
                "likes": 30,
                "comments": [
                    {
                        "user": "Amelia",
                        "comment": "I enjoyed reading this."
                    },
                    {
                        "user": "William",
                        "comment": "Thank you for sharing your knowledge."
                    }
                ],
                "blogs": [
                    {
                        "title": "Advanced JavaScript Concepts",
                        "url": "https://example.com/advanced-js"
                    }
                ]
            }
        ]
    }
}