
const employees = [
    {
      "id": 1,
      "firstName": "Aarav",
      "email": "e@e.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Home Page",
          "taskDescription": "Create a responsive homepage for the website.",
          "taskDate": "2024-10-01",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix Bug in Login API",
          "taskDescription": "Resolve the login issue for new users.",
          "taskDate": "2024-09-25",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Update Database Schema",
          "taskDescription": "Add new columns to the user table.",
          "taskDate": "2024-10-03",
          "category": "Database"
        }
      ],
      "taskCount": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 2,
      "firstName": "Paras",
      "email": "paras@gmail.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Marketing Plan",
          "taskDescription": "Develop a marketing strategy for the next quarter.",
          "taskDate": "2024-10-05",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Launch Product Page",
          "taskDescription": "Launch the new product page on the website.",
          "taskDate": "2024-09-22",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Conduct User Research",
          "taskDescription": "Collect feedback from users about the new feature.",
          "taskDate": "2024-10-10",
          "category": "Research"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Organize Workshop",
          "taskDescription": "Plan a workshop for new employees.",
          "taskDate": "2024-10-15",
          "category": "Training"
        }
      ],
      "taskCount": {
        "active": 3,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 3,
      "firstName": "Aditya",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Logo",
          "taskDescription": "Create a new logo for the brand.",
          "taskDate": "2024-10-07",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Refactor Codebase",
          "taskDescription": "Clean up the codebase and remove deprecated methods.",
          "taskDate": "2024-10-05",
          "category": "Development"
        }
      ],
      "taskCount": {
        "active": 2,
        "newTask": 1,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": 4,
      "firstName": "Saanvi",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Ad Campaign",
          "taskDescription": "Develop a new ad campaign for social media.",
          "taskDate": "2024-10-12",
          "category": "Marketing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Blog Post",
          "taskDescription": "Draft a blog post on the latest company achievements.",
          "taskDate": "2024-10-08",
          "category": "Content"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Set Up Analytics",
          "taskDescription": "Configure Google Analytics for the website.",
          "taskDate": "2024-09-30",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Client Onboarding",
          "taskDescription": "Onboard a new client to the platform.",
          "taskDate": "2024-10-02",
          "category": "Support"
        }
      ],
      "taskCount": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 5,
      "firstName": "Diya",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "QA Testing",
          "taskDescription": "Perform quality assurance testing on the app.",
          "taskDate": "2024-10-04",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Deploy Application",
          "taskDescription": "Deploy the application to the production environment.",
          "taskDate": "2024-09-28",
          "category": "Deployment"
        }
      ],
      "taskCount": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    }
];

const admin = [{
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
};
