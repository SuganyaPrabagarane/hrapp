import React from 'react';

const AnimalEmoji = ({ animal}) => {

  const animalEmojis = [
    { name: 'Rabbit', emoji: '/public/icons/rabbit.png' },
    { name: 'Bee', emoji: '/public/icons/bee.png' },
    { name: 'Dog', emoji: '/public/icons/dog.png' },
    { name: 'Deer', emoji: '/public/icons/deer.png' },
    { name: 'Elephant', emoji: '/public/icons/elephant.png' },
    { name: 'Fox', emoji: '/public/icons/fox.png' },
    { name: 'JellyFish', emoji: '/public/icons/jellyfish.png' },
    { name: 'Koala', emoji: '/public/icons/koala.png' },
    { name: 'Lion', emoji: '/public/icons/lion.png' },
    { name: 'Owl', emoji: '/public/icons/owl.png' },
    { name: 'Panda', emoji: '/public/icons/panda.png' },
    { name: 'Squirrel', emoji: '/public/icons/squirrel.png' },
    { name: 'Turtle', emoji: '/public/icons/turtle.png' },
    { name: 'Whale', emoji: '/public/icons/whale.png' }
  ];

   const matchedEmoji = animalEmojis.find(a => a.name.toLowerCase() === animal.toLowerCase());


  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <strong style={{ minWidth: '70px' }}>Animal:</strong>{' '}
      {matchedEmoji ? (
        <img src={matchedEmoji.emoji} height={50} width={50} alt={`${animal}-emoji`} />
      ) : (
        'N/A'
      )}
    </div>
  );
};

export default AnimalEmoji;
