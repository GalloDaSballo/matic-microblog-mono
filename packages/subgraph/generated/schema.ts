// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Post entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Post entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Post", id.toString(), this);
  }

  static load(id: string): Post | null {
    return store.get("Post", id) as Post | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get publishedAtBlock(): BigInt {
    let value = this.get("publishedAtBlock");
    return value.toBigInt();
  }

  set publishedAtBlock(value: BigInt) {
    this.set("publishedAtBlock", Value.fromBigInt(value));
  }

  get author(): Bytes {
    let value = this.get("author");
    return value.toBytes();
  }

  set author(value: Bytes) {
    this.set("author", Value.fromBytes(value));
  }

  get content(): string {
    let value = this.get("content");
    return value.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }

  get replyTo(): string {
    let value = this.get("replyTo");
    return value.toString();
  }

  set replyTo(value: string) {
    this.set("replyTo", Value.fromString(value));
  }

  get likes(): i32 {
    let value = this.get("likes");
    return value.toI32();
  }

  set likes(value: i32) {
    this.set("likes", Value.fromI32(value));
  }

  get dislikes(): i32 {
    let value = this.get("dislikes");
    return value.toI32();
  }

  set dislikes(value: i32) {
    this.set("dislikes", Value.fromI32(value));
  }
}

export class Like extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Like entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Like entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Like", id.toString(), this);
  }

  static load(id: string): Like | null {
    return store.get("Like", id) as Like | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get author(): Bytes {
    let value = this.get("author");
    return value.toBytes();
  }

  set author(value: Bytes) {
    this.set("author", Value.fromBytes(value));
  }

  get post(): string {
    let value = this.get("post");
    return value.toString();
  }

  set post(value: string) {
    this.set("post", Value.fromString(value));
  }
}

export class Dislike extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Dislike entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Dislike entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Dislike", id.toString(), this);
  }

  static load(id: string): Dislike | null {
    return store.get("Dislike", id) as Dislike | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get author(): Bytes {
    let value = this.get("author");
    return value.toBytes();
  }

  set author(value: Bytes) {
    this.set("author", Value.fromBytes(value));
  }

  get post(): string {
    let value = this.get("post");
    return value.toString();
  }

  set post(value: string) {
    this.set("post", Value.fromString(value));
  }
}
