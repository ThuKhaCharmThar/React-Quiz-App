import React from 'react';

const Home = () => {
    // Define your categories here, you can replace these with your actual categories
    const categories = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
        { id: 4, name: 'Category 4' },
        { id: 5, name: 'Category 5' },
        { id: 6, name: 'Category 6' },
        { id: 7, name: 'Category 7' },
        { id: 8, name: 'Category 8' },
        // Add more categories as needed
    ];

    return (
        <div>
            <h1>Quizz App</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {categories.map(category => (
                    <button
                        key={category.id}
                        style={{
                            width: '200px', // Adjust as needed
                            height: '100px', // Adjust as needed
                            margin: '10px', // Adjust as needed
                            fontSize: '20px', // Adjust as needed
                            borderRadius: '10px', // Adjust as needed
                            backgroundColor: '#007bff', // Adjust as needed
                            color: 'white', // Adjust as needed
                            border: 'none', // Adjust as needed
                            cursor: 'pointer',
                        }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Home;
