# Orbit — Personalized Learning, Exam Preparation, and Gamified Studying

Orbit is a web-based learning platform designed to help students study school subjects, prepare for competitive and standardized exams, and organize their learning through **interactive practice**, **personalized study schedules**, and **game-like progress tracking**. It brings AMC mathematics, SAT and ACT preparation, AP courses, and everyday classroom subjects into one desktop-first application that also adapts to mobile screens.

Rather than treating exam preparation, class notes, and daily study habits as separate activities, Orbit brings them together in one place. Students can explore subject-specific topics, answer practice questions with explanations, and turn their goals and notes into manageable study tasks.

## Features

- **All-in-One Course Library:** Browse AMC 10/12, SAT, ACT, AP, and regular school subjects.
- **AMC Competition Mathematics:** Explore algebra, geometry, number theory, combinatorics, and problem-solving topics.
- **SAT and ACT Preparation:** Access test-specific topic outlines and introductory practice questions.
- **AP Course Support:** Study topics from AP Calculus BC, AP Physics 1, AP Environmental Science, AP Statistics, and AP European History.
- **School Subject Learning:** Explore science, English, and history.
- **Interactive Practice:** Answer sample questions and receive immediate explanations.
- **Personalized Study Plans:** Generate daily tasks using an exam date, available study time, and difficult topics.
- **Notes-Based Planning:** Paste notes or upload TXT and Markdown files to help organize a study schedule.
- **Gamified Progress:** Earn XP for correct practice answers and track completed activities.
- **Learning Companion:** Meet Cosmo, the smiling planet mascot, in the learning dashboard.
- **Local Progress Saving:** Keep earned XP, completed sample questions, and study plans in browser storage.
- **Responsive Interface:** Use the desktop-first dashboard on laptops, desktops, and smaller mobile screens.

## Getting Started

Orbit is a static HTML, CSS, and JavaScript application. No installation, API key, or build tools are required.

Clone the repository:

```bash
git clone https://github.com/wxresearch/orbit-learning.git
cd orbit-learning
```

Open `index.html` in a web browser to explore the learning dashboard, choose a course, try sample practice questions, or create a study plan.

## Online Website

Orbit is structured for deployment through GitHub Pages:

https://wxresearch.github.io/orbit-learning/

## Study Planning

Orbit's study planner organizes exam preparation around a selected course, target date, daily study time, and topics that need additional attention. Students can also paste or upload text-based notes, generate daily tasks, mark them complete, and download a study schedule.

The current planner uses rules and topic lists in the browser. AI-based note understanding, automatic flashcard generation, adaptive question selection, and more detailed mastery tracking are future development goals.

## Question Bank Quality Checks

The current practice bank includes 42 original questions (15 AMC 10, 15 AMC 12, and 12 other subject questions). Newer AMC questions have difficulty levels from 2 to 4 on a five-level scale. The levels are editorial estimates, not official AMC difficulty classifications.

Run `node scripts/validate-questions.cjs` to check question structure, duplicate stems, difficulty values, and keyed answers against a separately curated fixture. The GitHub Actions workflow runs the checks on changes to the bank or validator. This test catches inconsistencies but does not independently solve arbitrary questions; new problems still require mathematical review.

## Expanded Learning Features

- **Adaptive practice (experimental):** Question history and an estimated topic mastery score guide question selection. Difficulty labels are still limited by the available question bank.
- **Learning analytics:** Track recorded attempts, accuracy, weak topics, and approximate mastery.
- **Study-plan connections:** Launch practice from daily tasks and reschedule unfinished tasks.
- **Flashcards:** Create and review cards using a basic spaced-review interval.
- **Study materials:** Paste or upload TXT/Markdown notes, review extracted lines, and create simple review cards or tasks.
- **Exam practice:** Timed, original-question mini-tests with a post-test summary. These are not official timed full-length examinations.

## Planned Infrastructure

A future secure server is needed for genuine AI tutoring, trustworthy PDF/PowerPoint extraction, AI-generated questions grounded in source documents, accounts, and cross-device synchronization. None of these are currently provided by the static GitHub Pages website. API secrets should never be added to frontend JavaScript.

## Project Scope

Orbit is an early-stage educational prototype. It includes a small set of original sample practice questions and introductory topic outlines, not full courses or official exam question banks. The planner does not yet use an AI model; adaptive selection uses heuristics, not machine learning. Uploaded text is handled locally by the browser, and progress is stored in browser local storage rather than a user account or synchronized database. PDF and PowerPoint parsing, cross-device accounts, and AI tutoring are not yet implemented.

Orbit is an independent project and is not affiliated with or endorsed by the organizations that administer the AMC, SAT, ACT, or AP examinations.

## Technologies and Topics

**HTML · CSS · JavaScript · Web development · Responsive design · Educational technology (EdTech) · Personalized learning · Study planning · Gamified learning · Practice quizzes · AMC 10 · AMC 12 · SAT preparation · ACT preparation · AP courses · Student productivity · Local storage**

## Project Repository

https://github.com/wxresearch/orbit-learning
