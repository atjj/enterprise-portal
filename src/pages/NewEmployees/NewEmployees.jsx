import { useState, useEffect } from "react"; // Import React, useState, and useEffect

const NewEmployees = () => {

    const initialEmployees = [
        {
            name: "Иван Иванов",
            position: 'Sales Manager',
            photo: '/src/assets/employee1.jpg',
            bio: 'Ivan has more than 20 years of experience in sales and clients management relationship. His hobbies are travelling and football'
        }, 
        {
            name: 'Maria Petrova',
            position: 'Software developer',
            photo: '/src/assets/employee2.jpg', // Ensure this path is correct
            bio: 'Maria is specialized on web application development and has extensive experience in Javascript and React. In her spare time she enjoys reading and learning new programming languages'
        }
    ];

    // Load employees from local storage or use initialEmployees
    const loadEmployees = () => {
        const savedEmployees = localStorage.getItem('employees');
        return savedEmployees ? JSON.parse(savedEmployees) : initialEmployees;
    };

    // Use state to manage the employees array
    const [employees, setEmployees] = useState(loadEmployees());
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState({ name: '', position: '', photo: '', bio: '' });
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // Save employees to local storage whenever they are updated
    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    // Hardcoded credentials for simplicity
    const validUsername = "admin";
    const validPassword = "password123";

    // Function to authenticate user
    const authenticate = () => {
        const username = prompt("Enter username:");
        const password = prompt("Enter password:");
        return username === validUsername && password === validPassword;
    };

    // Functions to handle dialogs
    const handleAddButtonClick = () => {
        if (authenticate()) {
            setIsAddDialogOpen(true);
        } else {
            alert("Unauthorized access. Action denied.");
        }
    };

    const handleRemoveButtonClick = () => {
        if (authenticate()) {
            if (selectedEmployee) {
                setIsRemoveDialogOpen(true);
            } else {
                alert("Please choose an employee you want to remove.");
            }
        } else {
            alert("Unauthorized access. Action denied.");
        }
    };

    const handleEditButtonClick = () => {
        if (authenticate()) {
            if (selectedEmployee) {
                setNewEmployee(selectedEmployee);
                setIsEditDialogOpen(true);
            } else {
                alert("Please choose an employee you want to edit.");
            }
        } else {
            alert("Unauthorized access. Action denied.");
        }
    };

    const closeAddDialog = () => setIsAddDialogOpen(false);
    const closeRemoveDialog = () => setIsRemoveDialogOpen(false);
    const closeEditDialog = () => setIsEditDialogOpen(false);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee((prev) => ({ ...prev, [name]: value }));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewEmployee((prev) => ({ ...prev, photo: reader.result }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // Function to add a new employee
    const handleAddEmployee = () => {
        setEmployees([...employees, newEmployee]);
        setNewEmployee({ name: '', position: '', photo: '', bio: '' });
        closeAddDialog();
    };

    // Function to update an existing employee
    const handleEditEmployee = () => {
        setEmployees(employees.map(emp => emp === selectedEmployee ? newEmployee : emp));
        setSelectedEmployee(null);
        setNewEmployee({ name: '', position: '', photo: '', bio: '' });
        closeEditDialog();
    };

    // Function to remove the selected employee
    const handleRemoveEmployee = () => {
        setEmployees(employees.filter(emp => emp !== selectedEmployee));
        setSelectedEmployee(null);
        closeRemoveDialog();
    };

    // Function to delete the photo
    const handleDeletePhoto = () => {
        setNewEmployee((prev) => ({ ...prev, photo: '' }));
    };

    return (
        <section className="border-[1px] px-[100px] pt-[20px] mt-[15px] min-h-[600px] text-center pb-[90px]">
            {/* Main title */}
            <h1 className="text-3xl font-bold text-green-700">Добро пожаловать, новые сотрудники!</h1>
            {/* Introduction paragraph */}
            <p className="text-lg text-gray-600 mt-4">
                Мы рады представить вам наших новых коллег. Узнайте о них больше ниже.
            </p>
            {/* Container for employee cards */}
            <div className="flex flex-col gap-8 mt-8">
                {employees.map((employee, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-100 p-6 rounded-lg text-left shadow-md flex flex-row items-center gap-6"
                        onClick={() => setSelectedEmployee(employee)}
                    >
                        {/* Employee photo */}
                        <img 
                            src={employee.photo} 
                            alt={`photo of ${employee.name}`} // Correct use of template literals
                            className="w-24 h-24"
                        />
                        <div>
                            {/* Employee name */}
                            <h2 className="text-2xl font-semibold text-green-700 mt-4">{employee.name}</h2>
                            {/* Employee position */}
                            <h3 className="text-xl text-green-500">{employee.position}</h3>
                            {/* Employee bio */}
                            <p className="text-gray-600 mt-2">{employee.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Buttons to add, remove, and edit employees */}
            <div className="flex justify-center gap-4 mt-6">
                <button 
                    onClick={handleAddButtonClick} 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                    Add a new employee
                </button>
                <button 
                    onClick={handleRemoveButtonClick} 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                    Remove employee(s)
                </button>
                <button 
                    onClick={handleEditButtonClick} 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Edit employee
                </button>
            </div>
            {/* Add Employee Dialog */}
            {isAddDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Add New Employee</h2>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={newEmployee.name} 
                            onChange={handleInputChange} 
                            className="mb-2 p-2 border"
                        />
                        <input 
                            type="text" 
                            name="position" 
                            placeholder="Position" 
                            value={newEmployee.position} 
                            onChange={handleInputChange} 
                            className="mb-2 p-2 border"
                        />
                        <input 
                            type="file" 
                            name="photo" 
                            accept="image/*" 
                            onChange={handleFileChange} 
                            className="mb-2 p-2 border"
                        />
                        <textarea 
                            name="bio" 
                            placeholder="Bio" 
                            value={newEmployee.bio} 
                            onChange={handleInputChange} 
                            className="mb-2 p-2 border"
                        />
                        <div className="flex gap-4">
                            <button 
                                onClick={handleAddEmployee} 
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                            >
                                Add
                            </button>
                            <button 
                                onClick={closeAddDialog} 
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Employee Dialog */}
            {isEditDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Edit Employee</h2>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={newEmployee.name} 
                            onChange={handleInputChange} 
                            className="mb-2 p-2 border"
                        />
                        <input 
                            type="text" 
                            name="position" 
                            placeholder="Position" 
                            value={newEmployee.position} 
                            onChange={handleInputChange} 
                            className="mb-2 p-2 border"
                        />
                        <input 
                            type="file" 
                            name="photo" 
                            accept="image/*" 
                            onChange={handleFileChange} 
                            className="mb-2 p-2 border"
                        />
                        {newEmployee.photo && (
                            <div className="mb-2">
                                <img 
                                    src={newEmployee.photo} 
                                    alt="Current Photo" 
                                    className="w-24 h-24"
                                />
                                <button 
                                    onClick={handleDeletePhoto} 
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mt-2"
                                >
                                    Delete photo
                                </button>
                            </div>
                        )}
                        <textarea 
                            name="bio" 
                            placeholder="Bio" 
                            value={newEmployee.bio} 
                            onChange={handleInputChange} 
                            className="mb-2 p-2 border"
                        />
                        <div className="flex gap-4">
                            <button 
                                onClick={handleEditEmployee} 
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                Save
                            </button>
                            <button 
                                onClick={closeEditDialog} 
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Remove Employee Dialog */}
            {isRemoveDialogOpen && selectedEmployee && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Remove Employee</h2>
                        <p>Are you sure you want to remove {selectedEmployee.name}?</p>
                        <div className="flex gap-4 mt-4">
                            <button 
                                onClick={handleRemoveEmployee} 
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                            >
                                Remove
                            </button>
                            <button 
                                onClick={closeRemoveDialog} 
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default NewEmployees; // Export the component to be used in other parts of the app
