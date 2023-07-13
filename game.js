const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const imgElement = document.getElementById('image')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  imgElement.src = textNode.source
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    source: "https://static.vecteezy.com/system/resources/previews/001/885/692/original/shaking-hands-agreement-icon-vector.jpg",
    text: 'You got your first project in The Company. To complete it, you will first need to build a team. Firstly, you need a Business Designer to lead the whole project. Who will you pick for this role?',
    options: [
      {
        text: 'Mark',
        nextText: 2
      },
      {
        text: 'Dave',
        nextText: 3
      },
      {
        text: 'Lauren',
        nextText: 3
      },
      {
        text: 'Adam',
        nextText: 4
      },
    ]
  },
  {
    id: 2,
    source: "https://www.mednefits.com/wp-content/uploads/2021/06/60bf26bb3338cf3f3bd297f2_What-is-employee-handbook-scaled.jpg",
    text: 'Congrats, you got a Business Designer on your team! On your way to inform the boss about it you reminded yourself that you did not read the Handbook yet. Want to do it now?',
    options: [
        {
            text: 'Nah, maybe later.',
            nextText: 5
          },
      {
        text: 'Sure!',
        setState: { passcode: true },
        nextText: 5
      },
      {
        text: 'No need, I will not need any knowledge from it in my project anyway.',
        nextText: 5
      }
    ]
  },
  {
    id: 3,
    source: "https://static.vecteezy.com/system/resources/previews/009/687/647/original/yellow-sad-face-emoji-file-png.png",
    text: 'Oh damn it, the person you chose did not know much about project management and your project failed before it even began. Do not worry, boss gave you another chance to redeem yourself!',
    options: [
        {
            text: 'Restart',
            nextText: -1
          }
    ]
  },
  {
    id: 4,
    source: "https://img-cdn.inc.com/image/upload/w_600,ar_16:9,c_fill,g_auto,f_auto,q_auto:best/images/panoramic/GettyImages-1432779282_520007_kio4kd.webp",
    text: 'Adam would love to help you with the project, but unfortunatelly he is too busy writing the content for sales page this week. You need to pick some other business designer.',
    options: [
      {
        text: 'Alex',
        nextText: 2
      },
      {
        text: 'Matthew',
        nextText: 2
      },
      {
        text: 'David',
        nextText: 3
      },
      {
        text: 'Anita',
        nextText: 3
      }
    ]
  },
  {
    id: 5,
    source: "https://www.springboard.com/blog/wp-content/uploads/2020/07/7-steps-for-transitioning-from-graphic-design-to-ui-ux-design.jpg",
    text: 'Boss is proud of you for finding a Business Designer for your project, but he says that now you also need a Visual designer. Who will you ask to help you with the visual assets for your project?',
    options: [
        {
            text: 'Pawel',
            nextText: 6
          },
          {
            text: 'Cat',
            nextText: 7
          },
          {
            text: 'Emily',
            nextText: 6
          },
          {
            text: 'Stephen',
            nextText: 6
          }
    ]
  },
  {
    id: 6,
    source: "https://static.vecteezy.com/system/resources/previews/009/687/647/original/yellow-sad-face-emoji-file-png.png",
    text: 'The person you chose for creating the visual assets was not too good at it and your project failed. Do not worry though, boss gave you another chance to redeem yourself!',
    options: [
        {
            text: 'Restart',
            nextText: -1
          }
    ]
  },
  {
    id: 7,
    source: "https://www.multirecruit.com/wp-content/uploads/2022/05/Skills-needed-to-be-a-web-Developer.png",
    text: 'Cat happily agreed to help you out with your project! Now you will also need a Digital designer in your teem. Who will you choose for that role?',
    options: [
      {
        text: 'Jade',
        nextText: 8
      },
      {
        text: 'Maxim',
        nextText: 9
      },
      {
        text: 'Bruno',
        nextText: 8
      },
      {
        text: 'David',
        nextText: 9
      }
    ]
  },
  {
    id: 8,
    source: "https://static.vecteezy.com/system/resources/previews/009/687/647/original/yellow-sad-face-emoji-file-png.png",
    text: 'Oh no, the person you chose knows nothing about web development! Because of lack of working digital hub, your project turned up to be a failure. Do not worry though, boss gave you another chance to redeem yourself!',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    source: "https://res.cloudinary.com/practicaldev/image/fetch/s--5NXiT3Hl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/75uyvkb5753zwjxnvzms.jpg",
    text: 'Amazing...but it turned out that you will need a second Digital designer as well. Your project required a lot of digital work. Who will you choose?',
    options: [
        {
            text: 'Pawel',
            nextText: 10
          },
          {
            text: 'Anita',
            nextText: 10
          },
          {
            text: 'Maximilian',
            nextText: 8
          },
          {
            text: 'Lauren',
            nextText: 8
          }
    ]
  },
  {
    id: 10,
    source: "https://techymantraa.com/wp-content/uploads/2022/11/30-crazy-social-media-facts-61f3b5a0ea1cf-sej.png",
    text: 'Everything is nearly done, last person you need is someone to look over copy content, correct it and also make some marketing noise around you project to be successful. Thers is only one person that can do that, do you know who?',
    options: [
        {
            text: 'Stephen',
            nextText: 13
          },
          {
            text: 'Dave',
            nextText: 11
          },
          {
            text: 'Maximilian',
            nextText: 12
          },
          {
            text: 'Jade',
            nextText: 11
          }
    ]
  },
  {
    id: 11,
    source: "https://static.vecteezy.com/system/resources/previews/009/687/647/original/yellow-sad-face-emoji-file-png.png",
    text: 'Unfortunatelly that person did not make enough marketing noise on social media about your project and it failed cause of lack of participants and interested people. Do not worry though, boss gave you another chance to redeem yourself!',
    options: [
      {
        text: 'Try Again.',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    source: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/330660-20pk-coloured-balloons-card-packaging.jpg",
    text: 'Congratulations! Your project became a huge success, the team was so proud of you that they decided to throw a party in the office for you! Everyone is upstairs already, just type in the office door passcode and go join them!',
    options: [
      {
        text: 'I do not know the door passcode, I will call the boss to let me in.',
        nextText: 13
      }, 
      {
        text: 'umm.. I will try 1234, maybe it will work?',
        nextText: 14
      },
      {
        text: 'I will message everyone on our work Chat, maybe someone will see it and respond!',
        nextText: 15
      },
      {
        text: 'Oh I know the passcode, it was in the Handbook! It is 9080 !',
        requiredState: (currentState) => currentState.passcode,
        nextText: 16
      }
    ]
  },
  {
    id: 13, 
    source: "https://media.istockphoto.com/id/585501092/vector/hand-pushing-needle-to-pop-the-balloon.jpg?s=612x612&w=0&k=20&c=qc-5FolB6_WBilYHNOCvgiv18-VshdCpPuO4hJK5Cqg=",
    text: 'The music at the party is too loud, your boss did not hear you calling. I guess no party for you, read the handbook next time!',
    options: [
      {
        text: 'Congratulations for the success in your first project. Try again and join the party this time.',
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    source: "https://media.istockphoto.com/id/585501092/vector/hand-pushing-needle-to-pop-the-balloon.jpg?s=612x612&w=0&k=20&c=qc-5FolB6_WBilYHNOCvgiv18-VshdCpPuO4hJK5Cqg=",
    text: 'Well it did not work and you did not get into the office, read the handbook next time!',
    options: [
      {
        text: 'Congratulations for the success in your first project. Try again and join the party this time.',
        nextText: -1
      }
    ]
  },
  {
    id: 15,
    source: "https://media.istockphoto.com/id/585501092/vector/hand-pushing-needle-to-pop-the-balloon.jpg?s=612x612&w=0&k=20&c=qc-5FolB6_WBilYHNOCvgiv18-VshdCpPuO4hJK5Cqg=",
    text: 'no one have seen your text, no party for you, read the handbook next time!',
    options: [
      {
        text: 'Congratulations for the success in your first project. Try again and join the party this time.',
        nextText: -1
      }
    ]
  },
  {
    id: 16,
    source: "https://img.freepik.com/free-vector/silhouette-crowd-party-people-starburst-background_1048-13832.jpg?w=2000",
    text: 'Yes! The passcode was correct and you had a blast at your company party! Ready for a new project?',
    options: [
      {
        text: 'Play Again!',
        nextText: -1
      }
    ]
  }
]

startGame()