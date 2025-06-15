import { useState } from 'react';
import { Trophy, Award, Calendar, GraduationCap, Star } from 'lucide-react';

const AchievementDashboard = () => {
    const [expandedYear, setExpandedYear] = useState('2024-25');
    const [hoveredCard, setHoveredCard] = useState(null);

    const achievementData = {
        '2024-25': {
            boards: {
                'SSC': {
                    color: 'bg-emerald-500',
                    lightColor: 'bg-emerald-50',
                    students: [
                        { name: 'Simar', subjects: 'French', score: '80%' }
                    ]
                },
                'IGCSE': {
                    color: 'bg-blue-500',
                    lightColor: 'bg-blue-50',
                    students: [
                        { name: 'Tapasya', subjects: 'English, Math, Physics, Chemistry, Biology', score: '88%' },
                        { name: 'Arissa', subjects: 'Math, Physics, Chemistry', score: '81.3%' },
                    ]
                },
                'CBSE': {
                    color: 'bg-red-500',
                    lightColor: 'bg-red-50',
                    students: [
                        { name: 'Jaspriya', subjects: 'Math (99/100), Science (99/100)', score: '97.8%', highlight: true }
                    ]
                },
                'HSC': {
                    color: 'bg-yellow-500',
                    lightColor: 'bg-yellow-50',
                    students: [
                        { name: 'Ketki Kunte', subjects: 'French (100/100)', score: '95.5%', highlight: true }
                    ]
                }
            }
        },
        '2023-24': {
            boards: {
                'SSC': {
                    color: 'bg-emerald-500',
                    lightColor: 'bg-emerald-50',
                    students: [
                        { name: 'Kiara', subjects: 'All (except French)', score: '81%' },
                        { name: 'Ethan', subjects: 'All', score: '80%' }
                    ]
                },
                'IGCSE': {
                    color: 'bg-blue-500',
                    lightColor: 'bg-blue-50',
                    students: [
                        { name: 'Pia', subjects: 'Chemistry, Physics, Math', score: '83%' }
                    ]
                },
                'ICSE': {
                    color: 'bg-yellow-500',
                    lightColor: 'bg-yellow-50',
                    students: [
                        { name: 'Darsh', subjects: 'Math', score: '92% (93/100)', highlight: true }
                    ]
                }
            }
        },
        '2022-23': {
            boards: {
                'SSC': {
                    color: 'bg-emerald-500',
                    lightColor: 'bg-emerald-50',
                    students: [
                        { name: 'Munira', subjects: 'All', score: '84%' },
                        { name: 'Arpita', subjects: 'All (except Hindi and Marathi)', score: '84%' },
                        { name: 'Ketki', subjects: 'French 95/100', score: '93.40%', highlight: true },
                        { name: 'Mahi', subjects: 'French 86/100', score: '89%' }
                    ]
                },
                'IGCSE': {
                    color: 'bg-blue-500',
                    lightColor: 'bg-blue-50',
                    students: [
                        { name: 'Christabel', subjects: 'Math, Physics, Chemistry, Biology, English', score: '81.4%', note: 'Highest in English – 90/100', highlight: false }
                    ]
                },
                'ICSE': {
                    color: 'bg-yellow-500',
                    lightColor: 'bg-yellow-50',
                    students: [
                        { name: 'Saisha', subjects: 'Math 99/100', score: '98% overall', highlight: true }
                    ]
                }
            }
        }
    };

    const getScoreColor = (score) => {
        const numScore = parseFloat(score.replace('%', ''));
        if (numScore >= 90) return 'text-green-600 font-bold';
        if (numScore >= 80) return 'text-blue-600 font-semibold';
        if (numScore >= 70) return 'text-orange-600 font-medium';
        return 'text-gray-600';
    };

    const StudentCard = ({ student, index, boardColor, lightColor }) => (
        <div
            className={`${lightColor} rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                student.highlight ? 'ring-2 ring-yellow-400' : ''
            }`}
            onMouseEnter={() => setHoveredCard(`${student.name}-${index}`)}
            onMouseLeave={() => setHoveredCard(null)}
        >
            <div className="flex items-start justify-between flex-col sm:flex-row gap-2 sm:gap-0">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 ${boardColor} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                            {index + 1}
                        </div>
                        <h4 className="font-semibold text-gray-800 text-lg">{student.name}</h4>
                        {student.highlight && (
                            <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse" />
                        )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{student.subjects}</p>
                    {student.note && (
                        <p className="text-blue-600 text-xs font-medium mb-2 bg-blue-100 px-2 py-1 rounded">
                            ✨ {student.note}
                        </p>
                    )}
                </div>
                <div className={`text-right ${hoveredCard === `${student.name}-${index}` ? 'scale-110' : ''} transition-transform duration-200`}>
                    <div className={`text-2xl font-bold ${getScoreColor(student.score)}`}>
                        {student.score}
                    </div>
                </div>
            </div>
        </div>
    );

    const BoardSection = ({ boardName, boardData }) => (
        <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
                <div className={`w-4 h-8 ${boardData.color} rounded`}></div>
                <h3 className="text-xl font-bold text-gray-800">{boardName} Board</h3>
                <div className={`px-3 py-1 ${boardData.color} text-white rounded-full text-sm font-medium`}>
                    {boardData.students.length} students
                </div>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {boardData.students.map((student, index) => (
                    <StudentCard
                        key={`${student.name}-${index}`}
                        student={student}
                        index={index}
                        boardColor={boardData.color}
                        lightColor={boardData.lightColor}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-blue-50 pt-2">
            <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-6">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4 flex-wrap">
                    <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
                    <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pt-3 sm:pt-5">
                        Academic Excellence Dashboard
                    </h1>
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
                </div>
                <p className="text-gray-600 text-base sm:text-lg">10th Board Examination Achievements</p>
            </div>

            {/* Year Selector */}
            <div className="flex justify-center mb-6 sm:mb-8">
                <div className="flex bg-white rounded-xl shadow-lg p-1 sm:p-2 gap-1 sm:gap-2 flex-wrap">
                    {Object.keys(achievementData).map((year) => (
                        <button
                            key={year}
                            onClick={() => setExpandedYear(year)}
                            className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                                expandedYear === year
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            <Calendar className="w-4 h-4" />
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            {/* Achievement Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-6 md:p-8 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Academic Year: {expandedYear}</h2>
                </div>
                
                {Object.entries(achievementData[expandedYear].boards).map(([boardName, boardData]) => (
                    <BoardSection key={boardName} boardName={boardName} boardData={boardData} />
                ))}
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
                {/* Stats Summary content can be added here if needed */}
            </div>
        </div>
        </div>
    );
}

export default AchievementDashboard;