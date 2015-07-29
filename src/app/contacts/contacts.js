'use strict';

angular.module('fond.contacts', [])

.controller('ContactsCtrl', function ($scope, $http) {

    $scope.persons = [
    {
      'img': 'person.jpg',
      'name': 'Блудов Андрей Михайлович',
      'post': 'директор',
      'tel': '63-07-26',
      'email': 'ambludov@old.fsc-tambov.ru'
    },
    {
      'img': 'person.jpg',
      'name': 'Незнанова Елена Владимировна',
      'post': 'главный специалист по мониторингу и контролю',
      'tel': '63-07-27',
      'email': 'evneznanova@old.fsc-tambov.ru '
    },
    {
      'img': 'person.jpg',
      'name': 'Арещенкова Алёна Анатольевна',
      'post': 'консультант',
      'tel': '63-07-27',
      'email': 'aaareshenkova@old.fsc-tambov.ru'
    },
    {
      'img': 'person.jpg',
      'name': 'Каратеева Ирина Григорьевна',
      'post': 'секретарь-референт',
      'tel': '63-07-26',
      'email': 'igkarateeva@old.fsc-tambov.ru'
    },
    {
      'img': 'person.jpg',
      'name': 'Михина Людмила Петровна',
      'post': 'главный бухгалтер',
      'tel': '63-07-27',
      'email': 'lpmikhina@old.fsc-tambov.ru '
    },
    {
      'img': 'person.jpg',
      'name': 'Сидоренко Александр Сергеевич',
      'post': 'главный юрисконсульт',
      'tel': '63-07-27',
      'email': 'assidorenko@old.fsc-tambov.ru'
    }
  ];
  $scope.director = $scope.persons[0];
    $http.get('http://localhost:3000/persons')
        .success(function(data){
            $scope.persons = data;
            $scope.director = data[0];
        });
})

;
