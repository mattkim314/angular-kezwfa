import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-descriptions-border',
  template: `
    <nz-descriptions nzTitle="반품 정보" nzBordered>
     <nz-descriptions-item nzTitle="ID">1234</nz-descriptions-item>
      <nz-descriptions-item nzTitle="원주문번호">1682004706879889</nz-descriptions-item>
      <nz-descriptions-item nzTitle="반품 접수 번호">1682005200272813</nz-descriptions-item>
      <nz-descriptions-item nzTitle="회원정보">
        mattkim / mattkim@bighitcorp.com
      </nz-descriptions-item>
      <nz-descriptions-item nzTitle="반품상태">
      <nz-tag [nzColor]="'geekblue'">#orderStatus</nz-tag>
      </nz-descriptions-item>
      <nz-descriptions-item nzTitle="환불상태">
      </nz-descriptions-item>
      <nz-descriptions-item nzTitle="고객 신청 사유 ">오배송</nz-descriptions-item>
      <nz-descriptions-item nzTitle="고객 신청 일시 ">2022-02-07 12:34</nz-descriptions-item>
      <nz-descriptions-item nzTitle="교환/반품 회수 완료 일시 "></nz-descriptions-item>
      <nz-descriptions-item nzTitle="고객 신청 상세 사유 ">#고객 사유 노출영역</nz-descriptions-item>
    </nz-descriptions>
    <br>
    <nz-descriptions nzTitle="회수지 정보" nzBordered>
      <nz-descriptions-item nzTitle="회수 연락처">+82 01012345678</nz-descriptions-item>
      <nz-descriptions-item nzTitle="회수지 국가">KR</nz-descriptions-item>
      <nz-descriptions-item nzTitle="TIN">PCCC 00800</nz-descriptions-item>
      <nz-descriptions-item nzTitle="회수지 주소">#우편번호 <br> 서울특별시 강남구 테헤란로108길 42 2층 위버스컴퍼니</nz-descriptions-item>
    </nz-descriptions>
    <br>
    <nz-descriptions nzTitle="교환/반품 회수 지시" nzBordered>
      <nz-descriptions-item nzTitle="회수여부">
        <div>
          <nz-select [(ngModel)]="selectedValue" nzAllowClear nzPlaceHolder="선택">
            <nz-option nzValue="rtn_insp_y" nzLabel="회수처리"></nz-option>
            <nz-option nzValue="rtn_insp_n" nzLabel="미회수처리"></nz-option>
          </nz-select>
        </div>
      </nz-descriptions-item>
    </nz-descriptions>
  `,
  styles:[
    `
    nz-select{
      margin-right: 10px;
      width: 120px;
    }
    `
  ]
})
export class NzDemoDescriptionsBorderComponent {}
export class NzDemoSelectBasicComponent {
  selectedValue = 'rtn_insp_y';
}
