angular.module('meuModulo')
	.controller('indexController', function ($scope) {
		$scope.titulo = 'Sistema com AngularJS';
		$scope.alunos = [
			{ nome: 'Camila', email: 'camila@mail.com', nota1: 65, nota2: 80, nota3: 55 },
			{ nome: 'Cristina', email: 'cristina@mail.com', nota1: 75, nota2: 80, nota3: 55 },
			{ nome: 'Clara', email: 'clara@mail.com', nota1: 65, nota2: 60, nota3: 55 },
			{ nome: 'Carol', email: 'carol@mail.com', nota1: 95, nota2: 30, nota3: 55 }
		];

		$scope.edicao = false;

		var init = function () {
			$scope.alunos.forEach(function (aluno) {
				aluno.media = media(aluno);
			});
			reset();
		}

		var media = function (aluno) {
			const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
			return media.toFixed(1);
		};

		$scope.addAluno = function (aluno) {
			$scope.edicao = false;
			aluno.media = media(aluno);
			$scope.alunos.push(aluno);
			reset();
		};

		var alunoEditar;

		$scope.editarAluno = function (aluno) {
			$scope.edicao = true;
			angular.copy(aluno, $scope.aluno);
			alunoEditar = aluno;
		}

		$scope.salvarAluno = function (aluno) {
			alunoEditar.nome = aluno.nome;
			alunoEditar.email = aluno.email;
			alunoEditar.nota1 = aluno.nota1;
			alunoEditar.nota2 = aluno.nota2;
			alunoEditar.nota3 = aluno.nota3;
			alunoEditar.media = media(aluno);
			reset();
		};

		$scope.deletarAluno = function (aluno) {
			for (var i in $scope.alunos) {
				var aux = $scope.alunos[i];
				if (aluno === aux) {
					$scope.alunos.splice(i, 1);
				}
			}
		};

		var reset = function () {
			$scope.aluno = { nome: '', email: '', nota1: null, nota2: null, nota3: null, media: null };
		};

		init();
	});