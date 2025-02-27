import React from 'react';
import * as S from './style';

function Privacy() {
  return (
    <S.Container>
      <div>
        ㈱グロースカンパニー(以下「会社」といいます。)は、会員様の個人情報を重要視し「情報通信網利用促進及び情報保護」に関する法律を遵守しております。
        <br />
        会社は個人情報取扱方針を通じて、会員様から収集した個人情報の利用目的・方法、又は個人情報保護のためにどのような措置を講じているかについてお知らせします。
      </div>
      <div>
        <ul>
          <li>■ 収集する個人情報の項目及び収集方法</li>
          <li>イ. 収集する個人情報の項目</li>
          <li>
            o 会社は、会員登録、相談、サービス申請などのために以下のような個人情報を収集しています。
          </li>
          <li>
            - 会員登録時 : 氏名、生年月日、性別、ログインID、パスワード、自宅の電話番号、携帯番号、
            メールアドレス、14歳未満の会員の場合、法定代理人の情報
          </li>
          <li>- サービス申請時 : 住所、決済情報</li>
          <li>
            o
            サービス利用過程や事業処理過程においてサービス利用記録、接続ログ、クッキー、接続IP情報、決済記録、不良利用記録が生成され、収集されることがあります。
          </li>
          <li>ロ. 収集方法</li>
          <li>
            -
            ホームページ、書面様式、掲示板、メールアドレス、イベント応募、配送要請、電話、ファックス、生成情報の収集ツールによる収集
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>■ 個人情報の収集及び利用目的</li>
          <li>会社は、収集した個人情報を次の目的のために活用します。</li>
          <li>
            o サービス提供に関する契約履行及びサービス提供による料金精算
            コンテンツ提供、購入および料金決済、物品配送または請求先など発送、金融取引本人認証及び金融サービス
          </li>
          <li>
            o 会員管理
            会員制サービス利用に伴う本人確認、個人識別、不良会員の不正利用防止や非認可使用の防止、登録意思の確認、年齢確認、満14歳未満の児童個人情報収集時の法定代理人の同意確認、苦情解処理、告示事項の伝達
          </li>
          <li>
            o マーケティング及び広告に活用
            イベントなど広告性情報の伝達、接続頻度の把握または会員のサービス利用に対する統計
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>■ 個人情報の保有及び利用期間</li>
          <li>
            原則として個人情報収集および利用目的を達成した後は、該当情報を直ちに破棄します。但し、次の情報に対しては以下の理由で明示した期間の間は保存します。
          </li>
          <li>イ．会社内の方針による情報保有の事由</li>
          <li>
            {' '}
            会員が退会した場合でも、不良会員の不正利用の再発防止、紛争解決および捜査機関からの協力要請がある場合のため、利用契約の解約日から○○年間、会員の情報を保存します。
          </li>
          <li>ロ．関係法令による情報保有の理由</li>
          <li>
            電子商取引などにおける消費者保護に関する法令など関係法令の規定によって保存する必要がある場合、会社は以下のように関係法令で定めた一定期間の間は会員情報を保管します。
          </li>
          <li>o 契約または請約撤回などに関する記録</li>
          <li>-保存理由 : 電子商取引における消費者保護に関する法律</li>
          <li>-保存期間 : 5年</li>
          <li>o 代金決済および財貨などの供給に関する記録</li>
          <li>-保存理由: 電子商取引などにおける消費者保護に関する法律</li>
          <li>-保存期間 : 5年</li>
          <li>o 消費者の苦情または紛争処理に関する記録</li>
          <li>-保存理由 : 電子商取引などにおける消費者保護に関する法律</li>
          <li>-保存期間 : 3年</li>
          <li>o ログ記録</li>
          <li>-保存理由: 通信秘密保護法</li>
          <li>-保存期間 : 3ヶ月</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>■ 個人情報の破棄手続き及び方法</li>
          <li>
            会社は原則として個人情報収集及び利用目的を達成した後には該当情報を直ちに破棄します。破棄手続及び方法は次の通りです。
          </li>
          <li>o 破棄手続</li>
          <li>
            会員様が会員登録などのために入力した情報は、目的を達成した後、別途のデータベースに移され(紙の場合は別途の書類箱)内部方針及びその他関連法令に基づく情報保護事由により(保有及び利用期間参照)
            一定期間保存した後に破棄します。
          </li>
          <li>
            別途データベースへ移った個人情報は、法律による場合を除いては保有する以外の他の目的で利用されません。
          </li>
          <li>o 破棄方法</li>
          <li>
            電子ファイルの形で保存された個人情報は、記録を再生できない技術的方法を用いて削除します。
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>■ 個人情報提供</li>
          <li>
            会社は利用者の個人情報を原則として外部に提供しません。但し、以下の場合は除外とします。
          </li>
          <li>o 利用者の事前の同意を得た場合</li>
          <li>
            o
            法令の規定に基づく場合、もしくは捜査の目的で法令で定めた手続きや方法により捜査機関からの要求があった場合
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>■ 収集した個人情報の委託</li>
          <li>会社は、サービス履行のため、次のように外部専門会社に委託し運営してます。</li>
          <li>o 委託対象者 : [(株)STOO][佐川急便株式会社]</li>
          <li>o 委託業務の内容 : [商品配送氏名、電話番号、住所契約終了まで]</li>
          <li>o 委託対象者 : [EXIMBAY]</li>
          <li>o 委託業務の内容 : [決済関連名前、電話番号、決済商品、決済金額契約終了時まで]</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>■ 利用者及び法定代理人の権利とその行使方法</li>
          <li>
            o
            利用者はいつでも登録された自分の個人情報を閲覧・変更したり、会員解約を要請することができます。
          </li>
          <li>
            o
            利用者の個人情報閲覧及び変更のためには「個人情報変更」(または「会員情報修正」など)を、会員解約(同意撤回)のためには「会員退会」をクリックし、本人確認手続きを行った上、直接閲覧、訂正または退会することができます。
          </li>
          <li>
            o
            もしくは、個人情報管理責任者に書面、電話または電子メールでご連絡いただければ、直ちに措置致します。
          </li>
          <li>
            o
            会員様が個人情報の誤りに対する訂正を要請する場合は、訂正が完了するまで該当個人情報を利用または提供しません。また、誤った個人情報を第三者に既に提供した場合は、訂正結果を第三者に直ちに通知し、訂正が行われるようにします。
          </li>
          <li>
            o
            会社は利用者の要請によって解約または削除した個人情報は「会社が収集する個人情報の保有及び利用期間」に明示されたとおりに処理し、その他の用途で閲覧または利用できないようにしております。
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>■ 個人情報自動収集装置の設置、運営及びその拒否に関する事項</li>
          <li>
            会社は、会員様の情報を随時保存し、呼び込む「クッキー(cookie)」などを運用します。クッキーとは、
            Web
            サイトを運営するにおいて用いられるサーバーが会員様のブラウザーに送信する少量の情報で、会員様のコンピューターのハードディスクに保存されます。
          </li>
          <li>会社は、次のような目的のため、クッキーを使用します。</li>
          <li>o クッキーなどの使用目的</li>
          <li>
            1.
            会員や非会員の接続頻度や訪問時間帯などを分析、利用者の好みや興味分野、各種イベントの参加頻度、訪問回数などの利用状況を把握し、利用者に最適なサービスを提供することができます。
          </li>
          <li>
            2.
            会員様はクッキー設置に対する選択権を有します。ご使用のWebブラウザーでオプションを選択することにより、全てのクッキーの受け入れを許可したり、保存する度に確認を経たり、全てのクッキーの保存を拒否するように設定することもできます。
          </li>
          <li>o クッキー設定拒否方法</li>
          <li>
            1.
            クッキー設定を拒否する方法としては、会員様のご使用のWebブラウザーでオプションを選択することにより、全てのクッキーの受け入れを許可したり、保存する度に確認を経たり、全てのクッキーの保存を拒否するように設定することもできます。
          </li>
          <li>
            2. 設定方法の例(インターネットエクスプローラーの場合) : 画面上段のメニューから「ツール」
            「インターネットオプション」 「プライバシー」
          </li>
          <li>
            3.
            但し、会員様がクッキーの保存を拒否した場合、一部のサービスがご利用できなくなる場合がございます。
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <ul>
          <li>■ 個人情報に関する相談サービス</li>
          <li>
            会社は顧客の個人情報を保護し、個人情報と関連する苦情を処理するため、以下のように関連部署および
            個人情報管理責任者を指定しております。
          </li>
          <li>o 個人情報管理担当者</li>
          <li>氏名 :ク ヤンイル</li>
          <li>所属 :Growth Company Co.,Ltd.</li>
          <li>電話番号 :050-3558-2356</li>
          <li>メールアドレス : info@onulstore.jp</li>
          <li>o 個人情報管理責任者</li>
          <li>氏名 :ク ヤンイル</li>
          <li>所属 : Growth Company Co.,Ltd.</li>
          <li>電話番号 :050-3558-2356</li>
          <li>メールアドレス : info@onulstore.jp</li>
          <li>
            o
            会員様が会社のサービスをご利用する際に発生する全ての個人情報保護関連の相談につきましては個人情報管理責任者もしくは担当部署に申告することができます。
          </li>
          <li>o 会社は、利用者の申告事項に対して迅速かつ誠実に対応致します。</li>
          <li>
            o その他個人情報侵害に対する申告や相談が必要な場合は、以下の機関までお問合せください。
          </li>
          <li>個人情報侵害申告センター (privacy.kisa.or.kr / 国番なしで118)</li>
          <li>大検察庁サイバー犯罪捜査団 (www.spo.go.kr / 02-3480-2000)</li>
          <li>警察庁サイバー安全局 (www.ctrc.go.kr/ 国番なしで182)</li>
          <li></li>
          <li></li>
        </ul>
      </div>{' '}
      <div>
        <ul>
          <li>■ 告示の義務</li>
          <li>
            会社は、個人情報取扱方針を改定する場合、Webサイト告知事項(または個別通知)を通じて告示します。
          </li>
          <li>ο 本方針は、 2022年 4月 1日より施行されます。</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </S.Container>
  );
}

export default Privacy;
