module FableInterop

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import.Browser
open EventSource


let parseMsg (msg: MessageEvent) =
    console.log msg.data

let sse = createEmpty<EventSource.EventSource>.Create("http://localhost:8844/stream")
sse.onmessage <- console.log
console.log(sse);
console.log("ready", sse.readyState);