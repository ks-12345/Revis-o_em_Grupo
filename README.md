
# 🚦Sistema de Semáforo Inteligente 🚦


##  Requisitos Funcionais ✔︎


* **RF1:** Deve detectar o volume de tráfego em cada via do cruzamento utilizando sensores.
* **RF2:** Ajusta a duração dos sinais verde e amarelo com base no fluxo de tráfego em tempo real.
* **RF3:** Permite o controle manual remoto dos sinais de tráfego por um operador.
* **RF4:** Registra e armazena dados de tráfego, falhas de sensores e alarmes em um banco de dados central.
* **RF5:** Entra em modo de alerta (amarelo piscante para todas as direções) se a comunicação com o servidor principal for perdida.
*  **RF6:** Aciona um modo de operação pré-programado em caso de falha de um ou mais sensores de tráfego.
*  **RF7:** Envia alertas automáticos por e-mail ou SMS para a equipe de manutenção em caso de falha do equipamento.
* **RF8:** Adapta a temporização dos sinais em condições climáticas adversas detectadas via sensor de clima.



##  Requisitos Não Funcionais ✔︎


* **RNF1: (Confiabilidade):** O sistema deve funcionar corretamente principalmente nos horários de pico.
* **RNF2: (Desempenho):** O tempo de resposta para ajustar a temporização do semáforo com base nos dados dos sensores deve ser imediato.
* **RNF3: (Segurança):** A comunicação entre sensores, controlador e servidor deve ser criptografada.
* **RNF4: (Usabilidade):** A interface de gerenciamento deve ser intuitiva e requerer treinamento mínimo.
* **RNF5: (Escalabilidade):** O sistema deve suportar até 50 cruzamentos adicionais sem perda de desempenho.
* **RNF6: (Disponibilidade):** O controlador local deve ter uma fonte de alimentação ininterrupta que garanta pelo menos 2 horas de operação em caso de queda de energia.



## 👤 Histórias de Usuário 👤

| Ator | Desejo | Finalidade |
| :--- | :--- | :--- |
| **Motorista** | Que o tempo do sinal verde seja ajustado automaticamente com base no fluxo | Reduzir o tempo de espera no cruzamento. |
| **Técnico de Manutenção** | Receber alertas imediatos no celular quando um sensor falhar | Consertá-lo rapidamente e evitar problemas de tráfego. |
| **Operador de Tráfego** | Acessar remotamente a interface do sistema | Controlar manualmente o semáforo em emergências e gerenciar o fluxo de forma segura. |



## 📊 Priorização (MoSCoW)

| Requisito | Priorização | Explicação |
| :--- | :--- | :--- |
| **RF1, RF2, RNF1, RNF2** |  **MUST HAVE** | Essenciais para a funcionalidade básica e segurança do semáforo inteligente. |
| **RF5, RF6, RNF6** |  **MUST HAVE** | Críticos para a operação em modo de falha e garantia de disponibilidade mínima. |
| **RNF3** |  **MUST HAVE** | Aborda as falhas de segurança identificadas no servidor antigo. |
| **RF4, RF7** |  **SHOULD HAVE** | Importantes para manutenção proativa e análise de dados futuros. |
| **RF3** |  **SHOULD HAVE** | Controle manual é importante, mas não a prioridade do sistema "inteligente". |
| **RF8, RNF4, RNF5** |  **COULD HAVE** | Recursos adicionais que agregam valor. |