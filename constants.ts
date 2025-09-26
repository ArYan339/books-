
import { Book } from './types';

// The app is designed to handle unavailable downloads gracefully.
// If a book's `downloadUrl` is set to '#', the download button will be disabled
// and show 'Unavailable'. Otherwise, provide the PDF link.
export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An easy & proven way to build good habits & break bad ones. Tiny changes, remarkable results.',
    summary: 'James Clear\'s "Atomic Habits" offers a practical framework for improving every day. The book argues that significant, long-term results come from the compound effect of hundreds of small decisions, or "atomic habits." Clear introduces the Four Laws of Behavior Change—make it obvious, attractive, easy, and satisfying—as a guide to creating good habits and eliminating bad ones. He emphasizes systems over goals, identity-based habits, and the science of how habits are formed. Through a blend of psychology, biology, and neuroscience, the book provides actionable strategies to take control of your daily routines and achieve remarkable outcomes.',
    imageUrl: 'https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/1ACZ_IUP4ilC8kVvArHpwiq6DxTlCcand/view',
  },
 
  {
    id: 2,
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    description: 'A counterintuitive approach to living a good life by focusing on what truly matters.',
    summary: 'Mark Manson presents a refreshingly honest take on self-help, arguing that the relentless pursuit of positivity is ultimately counterproductive. In "The Subtle Art of Not Giving a F*ck," he suggests that a good life is not about eliminating problems but about finding better problems to solve. The key is to choose what to care about—to "give a f*ck" about—and to accept that suffering and struggle are inevitable and even necessary for growth. Manson encourages readers to embrace their faults, take responsibility for their lives, and find meaning in confronting life\'s challenges head-on rather than avoiding them.',
    imageUrl: 'https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/1vU4NhvyIWexqHRfVMstzpyb9ovwuMn3Q/view?usp=drive_link',
  },
  
  {
    id: 3,
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    description: 'What the rich teach their kids about money that the poor and middle class do not.',
    summary: '"Rich Dad Poor Dad" is Robert Kiyosaki\'s story of growing up with two influential father figures: his own, highly educated but financially struggling father (Poor Dad), and his best friend\'s father, a high school dropout who became a self-made millionaire (Rich Dad). The book challenges conventional wisdom about money and work, advocating for financial literacy and entrepreneurship. Kiyosaki explains the crucial difference between assets and liabilities, emphasizing the importance of acquiring income-generating assets to achieve financial freedom. It\'s a foundational text on changing one\'s mindset about wealth creation.',
    imageUrl: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/1ACZ_IUP4ilC8kVvArHpwiq6DxTlCcand/view?usp=drive_link',
  },
  
  {
    id: 4,
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'A groundbreaking tour of the mind that explains the two systems that drive the way we think.',
    summary: 'Nobel laureate Daniel Kahneman takes readers on a tour of the mind in "Thinking, Fast and Slow." He explains the two systems that shape our judgments and choices: System 1, which is fast, intuitive, and emotional; and System 2, which is slower, more deliberate, and logical. Kahneman reveals the extraordinary capabilities, as well as the faults and biases, of fast thinking, and shows how our intuition often leads us astray. The book explores cognitive biases, loss aversion, and overconfidence, offering profound insights into how we can make better decisions in our personal and professional lives by understanding when to trust our intuitions and when to engage in more effortful thought.',
    imageUrl: 'https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/1-7X0vxP2EH14MZDvcTmZtdztxzTByvHy/view?usp=drive_link',
  },
  {
    id: 5,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    description: 'Explore the history of our species from the Stone Age to the Silicon Age, questioning our biggest narratives.',
    summary: 'Yuval Noah Harari\'s "Sapiens" provides a sweeping account of human history, from the first humans to walk the earth to the modern age. The book is structured around three major revolutions: the Cognitive Revolution, the Agricultural Revolution, and the Scientific Revolution. Harari argues that Homo sapiens came to dominate the world because of our unique ability to believe in and cooperate around shared fictions, such as gods, nations, money, and human rights. He challenges readers to reconsider everything they thought they knew about our species, our history, and our future on planet Earth.',
    imageUrl: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/12ID_HgSNb7L_mU0VgujXhR6vDkcJMHRj/view?usp=drive_link',
  },
  {
    id: 6,
    title: 'Mindset',
    author: 'Carol S. Dweck',
    description: 'The new psychology of success and how we can learn to fulfill our potential in parenting, business, school, and relationships.',
    summary: 'In "Mindset," psychologist Carol S. Dweck introduces her groundbreaking research on the power of our beliefs. She identifies two primary mindsets: the "fixed mindset," where individuals believe their abilities are static traits, and the "growth mindset," where they see abilities as something that can be developed through effort and learning. Dweck demonstrates how the mindset we adopt profoundly affects our lives, influencing our success in work, school, and relationships. The book offers practical advice on how to cultivate a growth mindset to foster resilience, a love of learning, and a greater sense of achievement.',
    imageUrl: 'https://rukminim1.flixcart.com/image/1664/1664/xif0q/regionalbooks/h/i/d/mindset-book-original-imahdnn5qzz4hfkh.jpeg?q=90&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/1KCqCEXeB9omYheNNClr9D-fo2LVixmal/view?usp=drive_link',
  },
  {
    id: 7,
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    description: 'One of the best-selling self-help books of all time, offering timeless advice on how to build relationships and achieve success.',
    summary: 'Dale Carnegie\'s "How to Win Friends and Influence People" is a timeless classic on social skills and human relations. The book is built on the fundamental principle that success comes from the ability to effectively communicate and interact with others. Carnegie provides actionable techniques for handling people, making them like you, winning them to your way of thinking, and changing them without causing resentment. Core tenets include becoming genuinely interested in other people, smiling, remembering names, and being a good listener. It remains an essential guide for anyone looking to improve their personal and professional relationships.',
    imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/book/b/p/c/how-to-win-friends-and-influence-people-original-imah5pyg6z3zhs9z.jpeg?q=70&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/1DbZbAwgczqltzbKANybOlXmSq7D4yot7/view?usp=drive_link',
  },
  {
    id: 8,
    title: 'The 48 Laws of Power',
    author: 'Robert Greene',
    description: 'A practical guide for anyone who wants power, observes power, or wants to arm themselves against power.',
    summary: '"The 48 Laws of Power" is a practical and often controversial guide to the dynamics of power. Robert Greene distills three thousand years of history into 48 essential laws, drawing on the philosophies of Machiavelli, Sun Tzu, and other historical figures. The book is a manual for understanding the strategies, tactics, and psychologies used by powerful people throughout history. Each law is presented with examples of its application and its reversal, offering a comprehensive, amoral look at how to gain, observe, and defend against power in any situation.',
    imageUrl: 'https://rukminim1.flixcart.com/image/1664/1664/xif0q/book/x/c/x/the-48-laws-of-power-original-imaha73pzgj45a8w.jpeg?q=90&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/1QvPVgbKLELcZI2lqLPHdPsMbgZ72iKFJ/view?usp=drive_link',
  },
  {
    id: 9,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    description: 'Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave.',
    summary: 'Morgan Housel\'s "The Psychology of Money" explores the complex relationship between human behavior and financial success. Through a series of engaging short stories, Housel argues that personal finance is less about mathematical formulas and more about psychology and behavior. He teaches that your personal history, unique worldview, and ego can have a greater impact on your financial outcomes than spreadsheets and data. The book provides timeless lessons on the importance of humility, patience, and understanding the difference between being rich and being wealthy.',
    imageUrl: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/1HqYnLNAAVpWBFsag654L7aEVbCAvCGxJ/view?usp=drive_link',
  },
  {
    id: 10,
    title: 'Think Like a Monk',
    author: 'Jay Shetty',
    description: 'Train your mind for peace and purpose every day, combining ancient wisdom with the practicalities of today’s world.',
    summary: 'Jay Shetty, a former Vedic monk, shares timeless wisdom and practical steps for living a less anxious, more meaningful life in "Think Like a Monk." He transforms abstract concepts from his time in an ashram into daily habits and advice anyone can adopt. The book guides readers on how to overcome negativity, stop overthinking, and find their purpose. Shetty provides techniques to develop focus, improve relationships, and cultivate inner peace and clarity, making ancient wisdom accessible for the challenges of the modern world.',
    imageUrl: 'https://rukminim1.flixcart.com/image/1664/1664/xif0q/book/x/q/a/think-like-a-monk-original-imahfxc9kgjukfyv.jpeg?q=90&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/1cp5ROAR1BjGireVKvPQp_Vru8lEPuD_z/view?usp=drive_link',
  },
  {
    id: 11,
    title: '8 Rules of Love',
    author: 'Jay Shetty',
    description: 'How to Find It, Keep It, and Let It Go. Shetty lays out specific, actionable steps to help you develop the skills to practice and nurture love.',
    summary: 'In "8 Rules of Love," Jay Shetty moves beyond platitudes to offer a practical guide to navigating relationships. Drawing on ancient wisdom and modern science, he presents eight rules to help readers prepare for love, practice it daily, and learn how to heal from it when it ends. Shetty guides readers through the entire relationship cycle, from solitude and first dates to cohabitation and breakups. The book provides a framework for understanding and nurturing love, emphasizing that love is a skill that can be developed and a daily practice rather than a spontaneous event.',
    imageUrl: 'https://rukminim1.flixcart.com/image/1664/1664/xif0q/book/s/x/5/8-rules-of-love-original-imah7h2y36gk4zwv.jpeg?q=90&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/12x3Jpgc6_BAdkBGKOgCMWgZhp0DuYpB-/view?usp=drive_link',
  },
  {
    id: 12,
    title: 'How to Talk to Anyone',
    author: 'Leil Lowndes',
    description: '92 Little Tricks for Big Success in Relationships. This book offers concrete tips for mastering the art of conversation.',
    summary: '"How to Talk to Anyone" is a treasure trove of communication strategies from Leil Lowndes. The book offers 92 specific and actionable techniques for mastering conversation and social interactions. Lowndes covers everything from first impressions and small talk to advanced techniques for networking and building rapport. Each "little trick" is designed to help readers navigate any social situation with confidence, whether it\'s a business meeting, a party, or a one-on-one conversation. It\'s a practical toolkit for anyone looking to become a more effective and charismatic communicator.',
    imageUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/book/p/y/v/how-to-talk-to-anyone-original-imahfzf555nxwbgy.jpeg?q=70&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/1BRkHsYxo6H-7U_J34paQN2CrZeIKQIMy/view?usp=drive_link',
  },
];