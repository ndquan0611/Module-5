import Student from "./components/student/Student";

const students = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        age: 30,
        address: "Đà Nẵng",
    },
    {
        id: 2,
        name: "Nguyễn Văn B",
        age: 20,
        address: "Hà Nội",
    },
    {
        id: 3,
        name: "Nguyễn Văn C",
        age: 23,
        address: "Hồ Chí Minh",
    },
    {
        id: 4,
        name: "Nguyễn Văn D",
        age: 12,
        address: "Đà Nẵng",
    },
];

function App() {
    return (
        <div className="App">
            <Student students={students} />
        </div>
    );
}

export default App;
