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
    imageUrl: 'https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/1ACZ_IUP4ilC8kVvArHpwiq6DxTlCcand/view',
  },
 
  {
    id: 2,
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    description: 'A counterintuitive approach to living a good life by focusing on what truly matters.',
    imageUrl: 'https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/1vU4NhvyIWexqHRfVMstzpyb9ovwuMn3Q/view?usp=drive_link',
  },
  
  {
    id: 3,
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    description: 'What the rich teach their kids about money that the poor and middle class do not.',
    imageUrl: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/1ACZ_IUP4ilC8kVvArHpwiq6DxTlCcand/view?usp=drive_link',
  },
  
  {
    id: 4,
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'A groundbreaking tour of the mind that explains the two systems that drive the way we think.',
    imageUrl: 'https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/1-7X0vxP2EH14MZDvcTmZtdztxzTByvHy/view?usp=drive_link',
  },
  {
    id: 5,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    description: 'Explore the history of our species from the Stone Age to the Silicon Age, questioning our biggest narratives.',
    imageUrl: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/12ID_HgSNb7L_mU0VgujXhR6vDkcJMHRj/view?usp=drive_link',
  },
  {
    id: 6,
    title: 'Mindset',
    author: 'Carol S. Dweck',
    description: 'The new psychology of success and how we can learn to fulfill our potential in parenting, business, school, and relationships.',
    imageUrl: 'https://rukminim1.flixcart.com/image/1664/1664/xif0q/regionalbooks/h/i/d/mindset-book-original-imahdnn5qzz4hfkh.jpeg?q=90&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/1KCqCEXeB9omYheNNClr9D-fo2LVixmal/view?usp=drive_link',
  },
  {
    id: 7,
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    description: 'One of the best-selling self-help books of all time, offering timeless advice on how to build relationships and achieve success.',
    imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/book/b/p/c/how-to-win-friends-and-influence-people-original-imah5pyg6z3zhs9z.jpeg?q=70&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/1DbZbAwgczqltzbKANybOlXmSq7D4yot7/view?usp=drive_link',
  },
  {
    id: 8,
    title: 'The 48 Laws of Power',
    author: 'Robert Greene',
    description: 'A practical guide for anyone who wants power, observes power, or wants to arm themselves against power.',
    imageUrl: 'https://rukminim1.flixcart.com/image/1664/1664/xif0q/book/x/c/x/the-48-laws-of-power-original-imaha73pzgj45a8w.jpeg?q=90&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/1QvPVgbKLELcZI2lqLPHdPsMbgZ72iKFJ/view?usp=drive_link',
  },
  {
    id: 9,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    description: 'Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave.',
    imageUrl: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg',
    downloadUrl: 'https://drive.google.com/file/d/1HqYnLNAAVpWBFsag654L7aEVbCAvCGxJ/view?usp=drive_link',
  },
  {
    id: 10,
    title: 'Think Like a Monk',
    author: 'Jay Shetty',
    description: 'Train your mind for peace and purpose every day, combining ancient wisdom with the practicalities of today’s world.',
    imageUrl: 'https://rukminim1.flixcart.com/image/1664/1664/xif0q/book/x/q/a/think-like-a-monk-original-imahfxc9kgjukfyv.jpeg?q=90&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/1cp5ROAR1BjGireVKvPQp_Vru8lEPuD_z/view?usp=drive_link',
  },
  {
    id: 11,
    title: '8 Rules of Love',
    author: 'Jay Shetty',
    description: 'How to Find It, Keep It, and Let It Go. Shetty lays out specific, actionable steps to help you develop the skills to practice and nurture love.',
    imageUrl: 'https://rukminim1.flixcart.com/image/1664/1664/xif0q/book/s/x/5/8-rules-of-love-original-imah7h2y36gk4zwv.jpeg?q=90&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/12x3Jpgc6_BAdkBGKOgCMWgZhp0DuYpB-/view?usp=drive_link',
  },
  {
    id: 12,
    title: 'How to Talk to Anyone',
    author: 'Leil Lowndes',
    description: '92 Little Tricks for Big Success in Relationships. This book offers concrete tips for mastering the art of conversation.',
    imageUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/book/p/y/v/how-to-talk-to-anyone-original-imahfzf555nxwbgy.jpeg?q=70&crop=false',
    downloadUrl: 'https://drive.google.com/file/d/1BRkHsYxo6H-7U_J34paQN2CrZeIKQIMy/view?usp=drive_link',
  },
];