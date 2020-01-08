backupApp.service('OEMService', function(MyBrandingService) {});
backupApp.service('MyBrandingService', function(BrandingService) {
	BrandingService.state.appName = "Duplicati";
	BrandingService.state.appSubtitle = "Powered by mdbackup.com!"
});