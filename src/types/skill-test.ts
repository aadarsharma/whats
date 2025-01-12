export interface SkillTest {
    title: string;
    icon: string;
    questions: number;
    duration: number;
    submittedDate: string;
    rank: number;
    percentile: number;
    correctAnswers: number;
    totalQuestions: number;
}

export interface SyllabusItem {
    topic: string;
    score: number;
}

export interface UpdateScoreData {
    rank: number;
    percentile: number;
    currentScore: number;
}

