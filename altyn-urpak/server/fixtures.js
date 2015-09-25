if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Крутая запись',
		body: '<strong>Hello, World</strong><p>New post блиблиблабла</p>',
		category: 'Хабарландыру',
		submitted: new Date(),
		updated: new Date(), 
		views: 0,
		visible: true,
		image: "/img/test.jpg"
	});
	Posts.insert({
		title: 'Уахахаха',
		body: '<p>Всем привет!</p><p>Это реально крутая запись!</p>',
		category: 'Хабарландыру',
		submitted: new Date() - 50000,
		updated: new Date() - 5000, 
		views: 0,
		visible: true,
		image: "/img/test.jpg"
	});
	Posts.insert({
		title: 'Олимп туралы',
		body: '<p>В данном посте вы увидите всю эмпирическую правду об OlimpKZ. Мой знакомый согласился на оглашение истории ставок. Вы сможете ознакомиться с обработкой и визуализацией ВСЕХ данных за ЧЕТЫРЕ года игры в olimpKZ.</p><p>Для тех кто не знает то OlimpKZ – это самая известная букмекерская контора с месячным оборотом около 30 миллиарда тенге. Судя по количеству этих контор по городам Казахстана можно сделать вывод, что очень большая часть населения играют. Конечно, все хотят "легких" денег. Поставил 1000 тенге и получил 2000. Ооо, круто! Тем более что вы "хорошо разбираетесь" в спорте! Но фундаментальная статистика не согласна с этим. В этом вы убедитесь сами продолжив читать этот пост и увидев графики.</p><p>И так начнем.</p><p>Следующий график показывает сколько тенге мой друг чаще ставил (синее) и проигрывал (красное)</p>',
		category: 'Жаңалықтар',
		submitted: new Date(),
		updated: new Date(), 
		views: 0,
		visible: true,
		image: "/img/test.jpg"
	});
}

if (Categories.find().count() === 0) {
	var categories = ['Жаңалықтар', 'Хабарландыру', 'Блабла'];
	for (var i = 0; i < categories.length; i++)
		Categories.insert({
			name: categories[i],
		});
}