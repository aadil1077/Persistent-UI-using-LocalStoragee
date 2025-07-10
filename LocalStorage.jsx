
const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "taskStats": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Monthly Report",
        "taskDescription": "Compile and submit the monthly performance report.",
        "taskDate": "2025-06-02",
        "category": "Reports"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Client Database",
        "taskDescription": "Add new clients and update existing details.",
        "taskDate": "2025-05-25",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Attend Webinar",
        "taskDescription": "Join the sustainability webinar at 3 PM.",
        "taskDate": "2025-06-03",
        "category": "Learning"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskStats": { "active": 2, "newTask": 2, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Landing Page",
        "taskDescription": "Create mockups for the new product landing page.",
        "taskDate": "2025-06-02",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve user login errors reported by QA.",
        "taskDate": "2025-05-30",
        "category": "Bug Fixing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Submit Expense Report",
        "taskDescription": "Upload the expense report for April.",
        "taskDate": "2025-05-28",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Review Codebase",
        "taskDescription": "Conduct a code review for the latest merge requests.",
        "taskDate": "2025-06-02",
        "category": "Code Review"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "taskStats": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize Database",
        "taskDescription": "Improve query performance on large datasets.",
        "taskDate": "2025-06-04",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Draft API Documentation",
        "taskDescription": "Create documentation for the new API endpoints.",
        "taskDate": "2025-06-03",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Demo",
        "taskDescription": "Present product demo to the client.",
        "taskDate": "2025-05-29",
        "category": "Client Meeting"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "taskStats": { "active": 2, "newTask": 2, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Draft slides for the upcoming strategy meeting.",
        "taskDate": "2025-06-02",
        "category": "Presentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Submit Timesheet",
        "taskDescription": "Fill in and submit the monthly timesheet.",
        "taskDate": "2025-05-31",
        "category": "Admin"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Refactor Code",
        "taskDescription": "Clean up legacy code in the project repository.",
        "taskDate": "2025-06-02",
        "category": "Code Review"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Karan",
    "email": "employee5@example.com",
    "password": "123",
    "taskStats": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Server Config",
        "taskDescription": "Modify configuration for server optimization.",
        "taskDate": "2025-05-28",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test New Features",
        "taskDescription": "Test the new features on the staging server.",
        "taskDate": "2025-06-02",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Test Cases",
        "taskDescription": "Create test cases for the new module.",
        "taskDate": "2025-06-02",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Backend Refactor",
        "taskDescription": "Refactor backend services for scalability.",
        "taskDate": "2025-05-27",
        "category": "Backend"
      }
    ]
  }
]






 const admin =[ 
    {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
    }

 ];

 export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
 }

 export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) 
    const admin = JSON.parse(localStorage.getItem('admin')) 
    

    return{employees,admin}
 }

