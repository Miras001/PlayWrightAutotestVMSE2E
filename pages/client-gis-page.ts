import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';
export class GISPage {
  
    readonly page: Page;
    
    constructor(page: Page) {
        
        this.page = page;
        
    }
//раскрыть дерево орг

    async expandTree() {

        await this.page.click('.MuiAvatar-circular');
        
    }

    //раскрыть дерево орг

    async filter() {

        await this.page.click('.MuiSvgIcon-root.filter-icon-gis');
        
    }
    
    //Открыть дерево Орг ГИС (выбор камер)
    async openCameraTree() {

        await this.page.click('.openDrawer');
        
    }

    //Закрыть дерево Орг ГИС (выбор камер)
    async closeCameraTree() {

        await this.page.click('.closeDrawer');
        
    }

    //Поле поиска в дереве ГИС
    async searchInputField(testText:string) {

        await this.page.click('.MuiInputBase-input');
        
    }

    //Поле поиска в дереве ГИС по Наименованию Организаций
    async searchInputFieldOrgName(titleOrg:string) {

        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',titleOrg);

        
    }
    //Поле поиска в дереве ГИС по БИН  Организаций
    async searchInputFieldOrgBIN(binOrg:string) {

        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',binOrg);

        
    }
    //Поле поиска в дереве ГИС по БИН  Обьекта
    async searchInputFieldObjBIN(binObj:string) {

        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',binObj);
 
    }
      //Поле поиска в дереве ГИС по Наименованию Обьекта
      async searchInputFieldObjName(binObj:string) {

        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',binObj);

    }

     //Поле поиска в дереве ГИС по Наименованию Камеры
     async searchInputFieldCamName(camTitle:string) {

        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',camTitle);

        
    }
      //Поле поиска в дереве ГИС по IP камеры
      async searchInputFieldCamIP(camIP:string) {

        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',camIP);

        
    }
     //Поле поиска в дереве ГИС по IP камеры
     async clearSearchField() {

        await this.page.click('.MuiInputAdornment-marginDense');
    
        
    }
    
     //Фильтр в дереве
     async treeFilter() {

        await this.page.click('.filter-icon-gis');
    
        
    }

    //Фильтр Фикс
    async filterFixBtn() {

        await this.page.click('');
    
        
    }

    //Фильтр ПТЗ
    async filterPTZBtn() {

        await this.page.click('');
    
        
    }

    //Фильтр Rec
    async filterRecBtn() {

        await this.page.click('');
    
        
    }

    //Фильтр Mon
    async filterMonBtn() {

        await this.page.click('.MuiGrid-item:nth-child(4)');
    
        
    }

    //Фильтр Offline
    async filterOffBtn() {

        await this.page.click('.MuiGrid-item:nth-child(5)');
    
        
    }

    //Кнопка слои
    async layersBtn() {

        await this.page.click('.leaflet-control-layers-toggle');
    
        
    }

     //Чекбокс камеры
     async cameraCheckbox() {

        await this.page.click('label:nth-of-type(1)>div>span');
    
        
    }

    //Чекбокс объекты
    async objectCheckbox() {

        await this.page.click('label:nth-of-type(2)>div>span');
    
        
    }

    //Кнопка списка городов
    async cityListBtn() {

        await this.page.click('.MuiSvgIcon-colorPrimary');
    
        
    }

    // Камеры на карте 
    async uncoverCameras() {

        await this.page.click('.leaflet-interactive:nth-child(3)');
    
        
    }

    // Карточка объектов и камер на карте 
    async objectCard () {

        await this.page.click('.MuiPaper-rounded');
    
        
    }

    // Кнопка Предпросмотр
    async previewBtn () {

        await this.page.click('button[title="Предпросмотр"]');
    
        
    }

    // Кнопка Архив
    async archiveBtn () {

        await this.page.click('button[title="Архив"]');
    
        
    }

    // Кнопка Архив
    async fullScrinBtn () {

        await this.page.click('button[title="Во весь экран"]');
    
        
    }

    // Кнопка увеличить зум 
    async zoomInBtn () {

        await this.page.click('[title="Zoom in"]');
    
        
    }

     // Кнопка уменьшить зум 
     async zoomOutBtn () {

        await this.page.click('[title="Zoom out"]');
    
        
    }

    // Кнопка уменьшить зум 
    async zoomOutBtn12 () {

        await this.page.click('[title="Zoom out"]');
    
        
    }
}

