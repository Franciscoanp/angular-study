import { ConfirmationService } from 'primeng/components/common/api';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { ToastyModule } from 'ng2-toasty';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { PessoaService } from 'app/pessoas/pessoa.service';
import { CategoriaService } from 'app/categorias/categoria.service';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { Title } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule
  ],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  exports: [NavbarComponent, ToastyModule, ConfirmDialogModule],
  providers: [
    ErrorHandlerService,
    LancamentoService,
    PessoaService,
    CategoriaService,
    ConfirmationService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class CoreModule { }
