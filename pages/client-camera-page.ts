import type { Page } from 'playwright';

import { isVisible } from '../framework/common-actions';
export class CameraPage {
  
    readonly page: Page;
    
    constructor(page: Page) {
        
        this.page = page;
        
    }

    async clickFullScreen() {

        await this.page.click('.MuiPaper-elevation1 > [tabindex]');
        
    }

    async checkCameraIcon() {

        await this.page.click('.MuiSvgIcon-fontSizeLarge');
        
    }
   
    async createGrid(testCamera:string) {

        await this.page.click('.create-grid');
        await this.page.type('.MuiDialogContent-root .MuiOutlinedInput-input', testCamera);
        await this.page.click('//span[contains(text(),"Сохранить")]');
        
    }
    //Кнопка удалить сетку
    async deleteGrid() {

        
        await this.page.click('.deleteIcon-for-testing');
        await this.page.click('.MuiDialogActions-spacing [tabindex="0"]:nth-of-type(2)');


    }
    //Кнопка сохраненные сетки
    async savedGrid() {

        await this.page.click('.saved-grid');
    
    }

    //Кнопка "Выбор камер" раскрыть дерево
    async changeCamera() {

        await this.page.click('.MuiButtonBase-root.MuiFab-root');
        await this.page.check('input[type="checkbox"]');        
    }
   
    //Кнопка "Открыть в текущей сетке"
    async openCurrentGrid() {

        await this.page.click('.MuiTreeView-root [role="treeitem"]:nth-of-type(1)');
        await this.page.click('button:has-text("Открыть в текущей сетке")');
        
    }

    //Кнопка "Открыть в оптимальной сетке"
    async openOptimalGrid() {

        await this.page.click('.MuiTreeView-root [role="treeitem"]:nth-of-type(1)');
        await this.page.click('button:has-text("Открыть в оптимальной сетке")');
        
    }

    //Кнопка очистки списка камер
    async clearChosedCamera() {

        await this.page.click('.MuiGrid-justify-xs-space-between .MuiButton-label');
        
    }

    
    //Кнопка очистки списка камер
    async clearChosedCam() {

        await this.page.click('.MuiGrid-justify-xs-space-between .MuiButton-label');
        
    }

    //Открыть дерево Орг
    async openCameraTree() {

        await this.page.click('.MuiButtonBase-root.MuiFab-root');
        
    }

    //Поле поиска в дереве
    async searchInputField() {

        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input','МВД РК');

        
    }

    //Поле поиска в дереве по наименованию Организаций
    async searchInputFieldOrgName(titleOrg:string) {
        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',titleOrg);

    }
    //Поле поиска в дереве по БИН Организаций
    async searchInputFieldOrgBin(binOrg:string) {
        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',binOrg);

    }
    //Поле поиска в дереве по наименованию Объекта
    async searchInputFieldObjName(titleObj:string) {
        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',titleObj);

    }
    //Поле поиска в дереве по БИН Объекта
    async searchInputFieldObjBin(binObj:string) {
        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',binObj);

    }
    //Поле поиска в дереве по наименованию Камеры
    async searchInputFieldCamName(titleCam:string) {
        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',titleCam);

    }
    //Поле поиска в дереве по IP камеры
    async searchInputFieldCamIp(ipCam:string) {
        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',ipCam);

    }

    //кнопка в плеере к началу отрезка
    async beginSegmentBtn(ipCam:string) {
        await this.page.click('.begin-segmentt');
        
    }

    //кнопка в плеере к концу отрезка
    async endSegmentBtn(ipCam:string) {
        await this.page.click('.end-segmentt');
        
    }

    //кнопка в плеере пауза
    async pauseBtn(ipCam:string) {
        await this.page.click('.stop');
        
    }

    //кнопка в плеере play
    async playBtn(ipCam:string) {
        await this.page.click('.pause');
        
    }

    //кнопка в плеере шаг назад
    async stepBackBtn(ipCam:string) {
        await this.page.click('.step-back');
        
    }

    //кнопка в плеере шаг вперед
    async stepAheadBtn(ipCam:string) {
        await this.page.click('.step-ahead');
        
    }

     //Сетки камер
     async cameraGrid1() {
        await this.page.click('.camera-grid-1');
        
    }

    //Сетки камер
    async cameraGrid2() {
        await this.page.click('.camera-grid-2');
        
    }

    //Сетки камер
    async cameraGrid4() {
        await this.page.click('.camera-grid-4');
        
    }

    //Сетки камер
    async cameraGrid5() {
        await this.page.click('.camera-grid-5');
        
    }

    //Сетки камер
    async cameraGrid13() {
        await this.page.click('.camera-grid-13');
        
    }

    //Сетки камер
    async cameraGrid36() {
        await this.page.click('.camera-grid-36');
        
    }

    //Сетки камер
    async cameraGrid64() {
        await this.page.click('.camera-grid-64');
        
    }
}

