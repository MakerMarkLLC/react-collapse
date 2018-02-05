module.exports = {
    name: 'brain',
    children: [
      {
        name: 'player',
        children: [
          {
            name: 'controls',
            children: [
              {
                name: 'pause',
                training: [
                  'pause',
                  'pause music'
                ]
              },
              {
                name: 'stop',
                training: [
                  'stop',
                  'stop music'
                ]
              },
              {
                name: 'resume',
                training: [
                  'resume',
                  'resume music',
                  'continue'
                ]
              },
              {
                name: 'next',
                training: [
                  'next',
                  'next track',
                  'next song'
                ]
              },
              {
                name: 'previous',
                training: [
                  'previous',
                  'previous track',
                  'previous song'
                ]
              },
              {
                name: 'volume',
                training: [
                  'volume three',
                  'volume seven',
                  'volume ten'
                ]
              },
            ]
          },
          {
            name: 'play',
            children: [
              {
                name: 'podcast',
                children: [
                  {
                    name: 'episode',
                    training: [
                      'find podcast episode about sasquatch',
                      'search for podcast episode on science',
                      'open podcast episode about code',
                      'find podcast episode about code',
                      'play a podcast episode'
                    ]
                  },
                  {
                    name: 'feed',
                    training: [
                      'find podcast about sasquatch',
                      'search for podcast on science',
                      'open podcast about code',
                      'find podcast about code',
                      'play a podcast'
                    ]
                  },
                ]
              },
              {
                name: 'pandora',
                children: [
                  {
                    name: 'station',
                    training: [
                      'open Pandora station',
                      'play pandora station',
                      'open pandora',
                      'open Pandora'
                    ]
                  },
                  {
                    name: 'like',
                    training: [
                      'I like this song',
                      'thumbs up',
                      'like'
                    ]
                  },
                  {
                    name: 'dislike',
                    training: [
                      'I do not like this song',
                      'dislike this song',
                      'I don\'t like this song',
                      'thumbs down',
                      'dislike'
                    ]
                  },
                  {
                    name: 'create',
                    training: [
                      'create a station for this song',
                      'create a new station'
                    ]
                  },
                  {
                    name: 'add',
                    training: [
                      'add this song to my station',
                      'add this song'
                    ]
                  }
                ]
              },
              {
                name: 'youtube',
                training: [
                  'play YouTube',
                  'play you tube',
                  'play music',
                  'play smashing pumpkins',
                  'play the Pixies',
                  'play YoYo Ma',
                  'play the Clash',
                  'play Bob Dylan',
                  'play the Beatles'
                ]
              },
              {
                name: 'soundcloud',
                training: ['call soundcloud']
              },
              {
                name: 'spotify',
                training: ['call spotify']
              },
              {
                name: 'local',
                training: ['call local']
              }
            ]
          }
        ]
      },
      {
        name: 'speak',
        children: [
          {
            name: 'static',
            training: [
              'good morning',
              'good morning ',
              'hi my name is mark',
              'hi i am mark',
              'hi i\'m mark',
              'hello my name is mark',
              'hello i am mark',
              'hello i\'m mark',
            ]
          },
          {
            name: 'fetch',
            children: [
              {
                name: 'lists',
                training: [
                  'get my lists',
                  'open my lists',
                  'add to my list'
                ]
              },
              {
                name: 'calendar',
                training: [
                  'what\'s on the agenda today',
                  'add to my calendar'
                ]
              },
              {
                name: 'traffic',
                training: ['get the traffic']
              },
              {
                name: 'news',
                training: ['tell me the news']
              },
              {
                name: 'time',
                training: [
                  'what time is it',
                  'time is it',
                  'what is the time',
                  'what time is it'
                ]
              },
              {
                name: 'weather',
                training: [
                  'what\'s the weather',
                  'what is the weather',
                  'tell me the weather',
                ]
              },
            ]
          },
          {
            name: 'search',
            children: [
              {
                name: 'wolfram',
                training: [
                  'define silicone',
                  'define silicone',
                  'define obtrusive',
                  'define carbon',
                  'answer two plus two',
                  'answer the square root of 72',
                ]
              },
              {
                name: 'wiki',
                training: [
                  'what is star wars',
                  'what is the meaning of life',
                  'who is George Washington',
                  'who is nirvana, the band',
                ]
              },
              {
                name: 'google',
                training: [
                  'how old is Bill Murray',
                  'when is the super bowl',
                  'who wrote the count of monte cristo'
                ]
              },
              {
                name: 'duckduck',
                training: ['search duckduck']
              },
              {
                name: 'bing',
                training: ['search bing']
              },
              {
                name: 'yahoo',
                training: ['search yahoo']
              }
            ]
          },
        ]
      },
      {
        name: 'show',
        children: [
          {
            name: 'search',
            children: [
              {
                name: 'google',
                training: [
                  'find me a recipe for lasanga',
                  'find recipe for lasanga',
                  'show me an image of ',
                  'open image for ',
                  'show me a website for ',
                  'open website for ',
                  'find recipe for lasanga',
                  'search recipes for cookies',
                  'open recipes for chicken noodle soup',
                ]
              }
            ]
          },
          {
            name: 'home',
            training: [
              'on screen',
              'on screen',
              'on screen',
            ]
          }
        ]
      }
    ]
  };
