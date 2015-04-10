if (!window.WebSocket || !window.MutationObserver) {
	window.alert('Unsupported browser version. Please upgrade to the latest.');
} else {
	angular.module('classeur.app', [
		'ngRoute',
		'ngMaterial',
		'ngAnimate',
		'ngAria',
		'ngMessages',
		'slugifier',
		'classeur.templates',
		'classeur.core',
		'classeur.core.button',
		'classeur.core.classeurs',
		'classeur.core.constants',
		'classeur.core.explorerLayout',
		'classeur.core.docs',
		'classeur.core.editor',
		'classeur.core.editorLayout',
		'classeur.core.files',
		'classeur.core.folders',
		'classeur.core.keystrokes',
		'classeur.core.settings',
		'classeur.core.settingsLayout',
		'classeur.core.sync',
		'classeur.core.socket',
		'classeur.core.user',
		'classeur.core.utils',
		'classeur.opt.btnBar',
		'classeur.opt.commenting',
		'classeur.opt.fileDragging',
		'classeur.opt.filePropertiesDialog',
		'classeur.opt.folding',
		'classeur.opt.headingAnchor',
		'classeur.opt.htmlSanitizer',
		'classeur.opt.offlineAlert',
		'classeur.opt.readOnlyAlert',
		'classeur.opt.recentAlert',
		'classeur.opt.urlDialog',
		'classeur.opt.scrollSync',
		'classeur.opt.sharingDialog',
		'classeur.opt.spinner',
		'classeur.opt.stat',
		'classeur.opt.userActivity',
		'classeur.opt.zenMode',
		'classeur.ext.emojiOne',
		'classeur.ext.markdownExtra',
		'classeur.ext.mathJax',
	]);
}
