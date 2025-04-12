import React from 'react'
import NotificacaoPreview from './NotificacaoPreview';

const ListPrevNoti = () => {
return (
    <div className="prev">
        <ul className="list-group">
            <li className="list-group-item"><NotificacaoPreview quarto="02"descricao="Leito aguardando limpeza"prioridade="media"/></li>
            <li className="list-group-item"><NotificacaoPreview quarto="07"descricao="Leito aguardando manutenção"prioridade="simples"/></li>
            <li className="list-group-item"><NotificacaoPreview quarto="12"descricao="Leito aguardando manutenção"prioridade="alta"/></li>
            <li className="list-group-item"><NotificacaoPreview quarto="20"descricao="Leito aguardando limpeza"prioridade="media"/></li>
            <li className="list-group-item"><NotificacaoPreview quarto="13"descricao="Leito aguardando manutenção"prioridade="simples"/></li>
        </ul>
    </div>
);
}

export default ListPrevNoti