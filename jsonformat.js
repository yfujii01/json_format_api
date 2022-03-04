// パラメータ1(対象のJSON)
// パラメータ2(作成したいJSON)
// パラメータ1のプロパティを指定する場合は「j」を使用
export async function jformat(jsonstr, path) {
    // 受信jsonが配列でない場合、配列化(処理共通化のため)
    let jsonp = JSON.parse(jsonstr);
    if (!isIterable(jsonp)) {
        jsonp = [jsonp];
    }

    // 処理
    const jresult = [];
    for (const json of jsonp) {
        const jafter = eval(`j=>{return ${path}}`)(json);
        jresult.push(jafter);
    }

    // 結果が1配列の場合、先頭要素のみ返す
    if (jresult.length = 1) {
        return jresult[0];
    }
    return jresult;
}

function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}