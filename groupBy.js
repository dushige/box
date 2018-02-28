/**
 * 这是一道习题，你有一份原始数据persons；还有5个函数，分别为：name、profession、age、maritalStatus和groupBy
 * 你的目的是：实现函数groupBy的内部逻辑，使其能实现对persons进行分组的功能
 */

var persons = [
  {name: 'Peter', profession: 'teacher', age: 20, maritalStatus: 'married'},
  {name: 'Michael', profession: 'teacher', age: 50, maritalStatus: 'single'},
  {name: 'Peter', profession: 'teacher', age: 20, maritalStatus: 'married'},
  {name: 'Anna', profession: 'scientific', age: 20, maritalStatus: 'married'},
  {name: 'Rose', profession: 'scientific', age: 50, maritalStatus: 'married'},
  {name: 'Anna', profession: 'scientific', age: 20, maritalStatus: 'single'},
  {name: 'Anna', profession: 'politician', age: 50, maritalStatus: 'married'}
];

function name (row) {
  return row.name;
}

function profession (row) {
  return row.profession;
}

function age (row) {
  return row.age;
}

function maritalStatus (row) {
  return row.maritalStatus;
}

function groupBy(originData, getKeyFuncs){
  //TODO 实现逻辑
}

/*
  1) groupBy(persons, [profession]) should be deepEqual:

        [
          [
            "teacher",
            [
              {"name":"Peter","profession":"teacher","age":20,"maritalStatus":"married"},
              {"name":"Michael","profession":"teacher","age":50,"maritalStatus":"single"},
              {"name":"Peter","profession":"teacher","age":20,"maritalStatus":"married"}
            ]
          ],
          [
            "scientific",
            [
              {"name":"Anna","profession":"scientific","age":20,"maritalStatus":"married"},
              {"name":"Rose","profession":"scientific","age":50,"maritalStatus":"married"},
              {"name":"Anna","profession":"scientific","age":20,"maritalStatus":"single"}
            ]
          ],
          [
            "politician",
            [
              {"name":"Anna","profession":"politician","age":50,"maritalStatus":"married"}
            ]
          ]
        ]

  2) groupBy(persons, [profession, name]) should be deepEqual:

        [
          [
            "teacher",
            [
              [
                "Peter",
                [
                  {"name":"Peter","profession":"teacher","age":20,"maritalStatus":"married"},
                  {"name":"Peter","profession":"teacher","age":20,"maritalStatus":"married"}
                ]
              ],
              [
                "Michael",
                [
                  {"name":"Michael","profession":"teacher","age":50,"maritalStatus":"single"}
                ]
              ]
            ]
          ],
          [
            "scientific",
            [
              [
                "Anna",
                [
                  {"name":"Anna","profession":"scientific","age":20,"maritalStatus":"married"},
                  {"name":"Anna","profession":"scientific","age":20,"maritalStatus":"single"}
                ]
              ],
              [
                "Rose",
                [
                  {"name":"Rose","profession":"scientific","age":50,"maritalStatus":"married"}
                ]
              ]
            ]
          ],
          [
            "politician",
            [
              [
                "Anna",
                [
                  {"name":"Anna","profession":"politician","age":50,"maritalStatus":"married"}
                ]
              ]
            ]
          ]
        ]

  3) groupBy(persons, [profession, name, age, maritalStatus]) should be deepEqual:

        [
          [
            "teacher",
            [
              [
                "Peter",
                [
                  [
                    20,
                    [
                      [
                        "married",
                        [
                          {"name":"Peter","profession":"teacher","age":20,"maritalStatus":"married"},
                          {"name":"Peter","profession":"teacher","age":20,"maritalStatus":"married"}
                        ]
                      ]
                    ]
                  ]
                ]
              ],
              [
                "Michael",
                [
                  [
                    50,
                    [
                      [
                        "single",
                        [
                          {"name":"Michael","profession":"teacher","age":50,"maritalStatus":"single"}
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ],
          [
            "scientific",
            [
              [
                "Anna",
                [
                  [
                    20,
                    [
                      [
                        "married",
                        [
                          {"name":"Anna","profession":"scientific","age":20,"maritalStatus":"married"}
                        ]
                      ],
                      [
                        "single",
                        [
                          {"name":"Anna","profession":"scientific","age":20,"maritalStatus":"single"}
                        ]
                      ]
                    ]
                  ]
                ]
              ],
              [
                "Rose",
                [
                  [
                    50,
                    [
                      [
                        "married",
                        [
                          {"name":"Rose","profession":"scientific","age":50,"maritalStatus":"married"}
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ],
          [
            "politician",
            [
              [
                "Anna",
                [
                  [
                    50,
                    [
                      [
                        "married",
                        [
                          {"name":"Anna","profession":"politician","age":50,"maritalStatus":"married"}
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]

*/
