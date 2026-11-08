import { getRandomInteger, getRandomElement } from './util.js';

const PHOTOS_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;

const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

const NAMES = [
  'Артём', 'Владимир', 'Дарья', 'Елена', 'Игорь',
  'Ксения', 'Максим', 'Ольга', 'Пётр', 'Софья'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomMessage = () => {
  const sentencesCount = getRandomInteger(1, 2);
  const sentences = [];
  for (let i = 0; i < sentencesCount; i += 1) {
    sentences.push(getRandomElement(MESSAGES));
  }
  return sentences.join(' ');
};

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
  message: getRandomMessage(),
  name: getRandomElement(NAMES),
});

const createComments = (startId) => {
  const count = getRandomInteger(COMMENTS_MIN, COMMENTS_MAX);
  const comments = [];
  for (let i = 0; i < count; i += 1) {
    comments.push(createComment(startId + i));
  }
  return comments;
};

const createPhoto = (index, commentStartId) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: `Описание фотографии №${index}`,
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: createComments(commentStartId),
});

// Экспортируем главную функцию генерации
export const generatePhotos = () => {
  const result = [];
  let nextCommentId = 1;

  for (let i = 1; i <= PHOTOS_COUNT; i += 1) {
    const photo = createPhoto(i, nextCommentId);
    nextCommentId += photo.comments.length;
    result.push(photo);
  }

  return result;
};
