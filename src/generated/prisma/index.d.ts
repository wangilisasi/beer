
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Beer
 * 
 */
export type Beer = $Result.DefaultSelection<Prisma.$BeerPayload>
/**
 * Model ExpenseTracker
 * 
 */
export type ExpenseTracker = $Result.DefaultSelection<Prisma.$ExpenseTrackerPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Beers
 * const beers = await prisma.beer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Beers
   * const beers = await prisma.beer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.beer`: Exposes CRUD operations for the **Beer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beers
    * const beers = await prisma.beer.findMany()
    * ```
    */
  get beer(): Prisma.BeerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseTracker`: Exposes CRUD operations for the **ExpenseTracker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseTrackers
    * const expenseTrackers = await prisma.expenseTracker.findMany()
    * ```
    */
  get expenseTracker(): Prisma.ExpenseTrackerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Beer: 'Beer',
    ExpenseTracker: 'ExpenseTracker',
    Expense: 'Expense'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "beer" | "expenseTracker" | "expense"
      txIsolationLevel: never
    }
    model: {
      Beer: {
        payload: Prisma.$BeerPayload<ExtArgs>
        fields: Prisma.BeerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeerPayload>
          }
          findFirst: {
            args: Prisma.BeerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeerPayload>
          }
          findMany: {
            args: Prisma.BeerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeerPayload>[]
          }
          create: {
            args: Prisma.BeerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeerPayload>
          }
          createMany: {
            args: Prisma.BeerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BeerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeerPayload>
          }
          update: {
            args: Prisma.BeerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeerPayload>
          }
          deleteMany: {
            args: Prisma.BeerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BeerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeerPayload>
          }
          aggregate: {
            args: Prisma.BeerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeer>
          }
          groupBy: {
            args: Prisma.BeerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BeerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BeerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BeerCountArgs<ExtArgs>
            result: $Utils.Optional<BeerCountAggregateOutputType> | number
          }
        }
      }
      ExpenseTracker: {
        payload: Prisma.$ExpenseTrackerPayload<ExtArgs>
        fields: Prisma.ExpenseTrackerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseTrackerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseTrackerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          findFirst: {
            args: Prisma.ExpenseTrackerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseTrackerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          findMany: {
            args: Prisma.ExpenseTrackerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>[]
          }
          create: {
            args: Prisma.ExpenseTrackerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          createMany: {
            args: Prisma.ExpenseTrackerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExpenseTrackerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          update: {
            args: Prisma.ExpenseTrackerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseTrackerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseTrackerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseTrackerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTrackerPayload>
          }
          aggregate: {
            args: Prisma.ExpenseTrackerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseTracker>
          }
          groupBy: {
            args: Prisma.ExpenseTrackerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseTrackerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExpenseTrackerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExpenseTrackerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExpenseTrackerCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseTrackerCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExpenseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExpenseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    beer?: BeerOmit
    expenseTracker?: ExpenseTrackerOmit
    expense?: ExpenseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExpenseTrackerCountOutputType
   */

  export type ExpenseTrackerCountOutputType = {
    expenses: number
  }

  export type ExpenseTrackerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | ExpenseTrackerCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * ExpenseTrackerCountOutputType without action
   */
  export type ExpenseTrackerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTrackerCountOutputType
     */
    select?: ExpenseTrackerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseTrackerCountOutputType without action
   */
  export type ExpenseTrackerCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Beer
   */

  export type AggregateBeer = {
    _count: BeerCountAggregateOutputType | null
    _avg: BeerAvgAggregateOutputType | null
    _sum: BeerSumAggregateOutputType | null
    _min: BeerMinAggregateOutputType | null
    _max: BeerMaxAggregateOutputType | null
  }

  export type BeerAvgAggregateOutputType = {
    alcoholContent: number | null
  }

  export type BeerSumAggregateOutputType = {
    alcoholContent: number | null
  }

  export type BeerMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    region: string | null
    alcoholContent: number | null
    isTested: boolean | null
  }

  export type BeerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    region: string | null
    alcoholContent: number | null
    isTested: boolean | null
  }

  export type BeerCountAggregateOutputType = {
    id: number
    name: number
    type: number
    region: number
    alcoholContent: number
    isTested: number
    _all: number
  }


  export type BeerAvgAggregateInputType = {
    alcoholContent?: true
  }

  export type BeerSumAggregateInputType = {
    alcoholContent?: true
  }

  export type BeerMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    region?: true
    alcoholContent?: true
    isTested?: true
  }

  export type BeerMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    region?: true
    alcoholContent?: true
    isTested?: true
  }

  export type BeerCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    region?: true
    alcoholContent?: true
    isTested?: true
    _all?: true
  }

  export type BeerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beer to aggregate.
     */
    where?: BeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beers to fetch.
     */
    orderBy?: BeerOrderByWithRelationInput | BeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beers
    **/
    _count?: true | BeerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeerMaxAggregateInputType
  }

  export type GetBeerAggregateType<T extends BeerAggregateArgs> = {
        [P in keyof T & keyof AggregateBeer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeer[P]>
      : GetScalarType<T[P], AggregateBeer[P]>
  }




  export type BeerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeerWhereInput
    orderBy?: BeerOrderByWithAggregationInput | BeerOrderByWithAggregationInput[]
    by: BeerScalarFieldEnum[] | BeerScalarFieldEnum
    having?: BeerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeerCountAggregateInputType | true
    _avg?: BeerAvgAggregateInputType
    _sum?: BeerSumAggregateInputType
    _min?: BeerMinAggregateInputType
    _max?: BeerMaxAggregateInputType
  }

  export type BeerGroupByOutputType = {
    id: string
    name: string
    type: string
    region: string
    alcoholContent: number
    isTested: boolean
    _count: BeerCountAggregateOutputType | null
    _avg: BeerAvgAggregateOutputType | null
    _sum: BeerSumAggregateOutputType | null
    _min: BeerMinAggregateOutputType | null
    _max: BeerMaxAggregateOutputType | null
  }

  type GetBeerGroupByPayload<T extends BeerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeerGroupByOutputType[P]>
            : GetScalarType<T[P], BeerGroupByOutputType[P]>
        }
      >
    >


  export type BeerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    region?: boolean
    alcoholContent?: boolean
    isTested?: boolean
  }, ExtArgs["result"]["beer"]>



  export type BeerSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    region?: boolean
    alcoholContent?: boolean
    isTested?: boolean
  }

  export type BeerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "region" | "alcoholContent" | "isTested", ExtArgs["result"]["beer"]>

  export type $BeerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Beer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      region: string
      alcoholContent: number
      isTested: boolean
    }, ExtArgs["result"]["beer"]>
    composites: {}
  }

  type BeerGetPayload<S extends boolean | null | undefined | BeerDefaultArgs> = $Result.GetResult<Prisma.$BeerPayload, S>

  type BeerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BeerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeerCountAggregateInputType | true
    }

  export interface BeerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Beer'], meta: { name: 'Beer' } }
    /**
     * Find zero or one Beer that matches the filter.
     * @param {BeerFindUniqueArgs} args - Arguments to find a Beer
     * @example
     * // Get one Beer
     * const beer = await prisma.beer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeerFindUniqueArgs>(args: SelectSubset<T, BeerFindUniqueArgs<ExtArgs>>): Prisma__BeerClient<$Result.GetResult<Prisma.$BeerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Beer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BeerFindUniqueOrThrowArgs} args - Arguments to find a Beer
     * @example
     * // Get one Beer
     * const beer = await prisma.beer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeerFindUniqueOrThrowArgs>(args: SelectSubset<T, BeerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeerClient<$Result.GetResult<Prisma.$BeerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeerFindFirstArgs} args - Arguments to find a Beer
     * @example
     * // Get one Beer
     * const beer = await prisma.beer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeerFindFirstArgs>(args?: SelectSubset<T, BeerFindFirstArgs<ExtArgs>>): Prisma__BeerClient<$Result.GetResult<Prisma.$BeerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeerFindFirstOrThrowArgs} args - Arguments to find a Beer
     * @example
     * // Get one Beer
     * const beer = await prisma.beer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeerFindFirstOrThrowArgs>(args?: SelectSubset<T, BeerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeerClient<$Result.GetResult<Prisma.$BeerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beers
     * const beers = await prisma.beer.findMany()
     * 
     * // Get first 10 Beers
     * const beers = await prisma.beer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beerWithIdOnly = await prisma.beer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeerFindManyArgs>(args?: SelectSubset<T, BeerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Beer.
     * @param {BeerCreateArgs} args - Arguments to create a Beer.
     * @example
     * // Create one Beer
     * const Beer = await prisma.beer.create({
     *   data: {
     *     // ... data to create a Beer
     *   }
     * })
     * 
     */
    create<T extends BeerCreateArgs>(args: SelectSubset<T, BeerCreateArgs<ExtArgs>>): Prisma__BeerClient<$Result.GetResult<Prisma.$BeerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beers.
     * @param {BeerCreateManyArgs} args - Arguments to create many Beers.
     * @example
     * // Create many Beers
     * const beer = await prisma.beer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeerCreateManyArgs>(args?: SelectSubset<T, BeerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Beer.
     * @param {BeerDeleteArgs} args - Arguments to delete one Beer.
     * @example
     * // Delete one Beer
     * const Beer = await prisma.beer.delete({
     *   where: {
     *     // ... filter to delete one Beer
     *   }
     * })
     * 
     */
    delete<T extends BeerDeleteArgs>(args: SelectSubset<T, BeerDeleteArgs<ExtArgs>>): Prisma__BeerClient<$Result.GetResult<Prisma.$BeerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Beer.
     * @param {BeerUpdateArgs} args - Arguments to update one Beer.
     * @example
     * // Update one Beer
     * const beer = await prisma.beer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeerUpdateArgs>(args: SelectSubset<T, BeerUpdateArgs<ExtArgs>>): Prisma__BeerClient<$Result.GetResult<Prisma.$BeerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beers.
     * @param {BeerDeleteManyArgs} args - Arguments to filter Beers to delete.
     * @example
     * // Delete a few Beers
     * const { count } = await prisma.beer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeerDeleteManyArgs>(args?: SelectSubset<T, BeerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beers
     * const beer = await prisma.beer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeerUpdateManyArgs>(args: SelectSubset<T, BeerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Beer.
     * @param {BeerUpsertArgs} args - Arguments to update or create a Beer.
     * @example
     * // Update or create a Beer
     * const beer = await prisma.beer.upsert({
     *   create: {
     *     // ... data to create a Beer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beer we want to update
     *   }
     * })
     */
    upsert<T extends BeerUpsertArgs>(args: SelectSubset<T, BeerUpsertArgs<ExtArgs>>): Prisma__BeerClient<$Result.GetResult<Prisma.$BeerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beers that matches the filter.
     * @param {BeerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const beer = await prisma.beer.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BeerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Beer.
     * @param {BeerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const beer = await prisma.beer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BeerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Beers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeerCountArgs} args - Arguments to filter Beers to count.
     * @example
     * // Count the number of Beers
     * const count = await prisma.beer.count({
     *   where: {
     *     // ... the filter for the Beers we want to count
     *   }
     * })
    **/
    count<T extends BeerCountArgs>(
      args?: Subset<T, BeerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BeerAggregateArgs>(args: Subset<T, BeerAggregateArgs>): Prisma.PrismaPromise<GetBeerAggregateType<T>>

    /**
     * Group by Beer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BeerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeerGroupByArgs['orderBy'] }
        : { orderBy?: BeerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BeerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Beer model
   */
  readonly fields: BeerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Beer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Beer model
   */
  interface BeerFieldRefs {
    readonly id: FieldRef<"Beer", 'String'>
    readonly name: FieldRef<"Beer", 'String'>
    readonly type: FieldRef<"Beer", 'String'>
    readonly region: FieldRef<"Beer", 'String'>
    readonly alcoholContent: FieldRef<"Beer", 'Float'>
    readonly isTested: FieldRef<"Beer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Beer findUnique
   */
  export type BeerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beer
     */
    select?: BeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beer
     */
    omit?: BeerOmit<ExtArgs> | null
    /**
     * Filter, which Beer to fetch.
     */
    where: BeerWhereUniqueInput
  }

  /**
   * Beer findUniqueOrThrow
   */
  export type BeerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beer
     */
    select?: BeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beer
     */
    omit?: BeerOmit<ExtArgs> | null
    /**
     * Filter, which Beer to fetch.
     */
    where: BeerWhereUniqueInput
  }

  /**
   * Beer findFirst
   */
  export type BeerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beer
     */
    select?: BeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beer
     */
    omit?: BeerOmit<ExtArgs> | null
    /**
     * Filter, which Beer to fetch.
     */
    where?: BeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beers to fetch.
     */
    orderBy?: BeerOrderByWithRelationInput | BeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beers.
     */
    cursor?: BeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beers.
     */
    distinct?: BeerScalarFieldEnum | BeerScalarFieldEnum[]
  }

  /**
   * Beer findFirstOrThrow
   */
  export type BeerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beer
     */
    select?: BeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beer
     */
    omit?: BeerOmit<ExtArgs> | null
    /**
     * Filter, which Beer to fetch.
     */
    where?: BeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beers to fetch.
     */
    orderBy?: BeerOrderByWithRelationInput | BeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beers.
     */
    cursor?: BeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beers.
     */
    distinct?: BeerScalarFieldEnum | BeerScalarFieldEnum[]
  }

  /**
   * Beer findMany
   */
  export type BeerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beer
     */
    select?: BeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beer
     */
    omit?: BeerOmit<ExtArgs> | null
    /**
     * Filter, which Beers to fetch.
     */
    where?: BeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beers to fetch.
     */
    orderBy?: BeerOrderByWithRelationInput | BeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beers.
     */
    cursor?: BeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beers.
     */
    skip?: number
    distinct?: BeerScalarFieldEnum | BeerScalarFieldEnum[]
  }

  /**
   * Beer create
   */
  export type BeerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beer
     */
    select?: BeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beer
     */
    omit?: BeerOmit<ExtArgs> | null
    /**
     * The data needed to create a Beer.
     */
    data: XOR<BeerCreateInput, BeerUncheckedCreateInput>
  }

  /**
   * Beer createMany
   */
  export type BeerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beers.
     */
    data: BeerCreateManyInput | BeerCreateManyInput[]
  }

  /**
   * Beer update
   */
  export type BeerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beer
     */
    select?: BeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beer
     */
    omit?: BeerOmit<ExtArgs> | null
    /**
     * The data needed to update a Beer.
     */
    data: XOR<BeerUpdateInput, BeerUncheckedUpdateInput>
    /**
     * Choose, which Beer to update.
     */
    where: BeerWhereUniqueInput
  }

  /**
   * Beer updateMany
   */
  export type BeerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beers.
     */
    data: XOR<BeerUpdateManyMutationInput, BeerUncheckedUpdateManyInput>
    /**
     * Filter which Beers to update
     */
    where?: BeerWhereInput
    /**
     * Limit how many Beers to update.
     */
    limit?: number
  }

  /**
   * Beer upsert
   */
  export type BeerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beer
     */
    select?: BeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beer
     */
    omit?: BeerOmit<ExtArgs> | null
    /**
     * The filter to search for the Beer to update in case it exists.
     */
    where: BeerWhereUniqueInput
    /**
     * In case the Beer found by the `where` argument doesn't exist, create a new Beer with this data.
     */
    create: XOR<BeerCreateInput, BeerUncheckedCreateInput>
    /**
     * In case the Beer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeerUpdateInput, BeerUncheckedUpdateInput>
  }

  /**
   * Beer delete
   */
  export type BeerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beer
     */
    select?: BeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beer
     */
    omit?: BeerOmit<ExtArgs> | null
    /**
     * Filter which Beer to delete.
     */
    where: BeerWhereUniqueInput
  }

  /**
   * Beer deleteMany
   */
  export type BeerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beers to delete
     */
    where?: BeerWhereInput
    /**
     * Limit how many Beers to delete.
     */
    limit?: number
  }

  /**
   * Beer findRaw
   */
  export type BeerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Beer aggregateRaw
   */
  export type BeerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Beer without action
   */
  export type BeerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beer
     */
    select?: BeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beer
     */
    omit?: BeerOmit<ExtArgs> | null
  }


  /**
   * Model ExpenseTracker
   */

  export type AggregateExpenseTracker = {
    _count: ExpenseTrackerCountAggregateOutputType | null
    _avg: ExpenseTrackerAvgAggregateOutputType | null
    _sum: ExpenseTrackerSumAggregateOutputType | null
    _min: ExpenseTrackerMinAggregateOutputType | null
    _max: ExpenseTrackerMaxAggregateOutputType | null
  }

  export type ExpenseTrackerAvgAggregateOutputType = {
    totalMoney: number | null
  }

  export type ExpenseTrackerSumAggregateOutputType = {
    totalMoney: number | null
  }

  export type ExpenseTrackerMinAggregateOutputType = {
    id: string | null
    totalMoney: number | null
    endDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseTrackerMaxAggregateOutputType = {
    id: string | null
    totalMoney: number | null
    endDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseTrackerCountAggregateOutputType = {
    id: number
    totalMoney: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpenseTrackerAvgAggregateInputType = {
    totalMoney?: true
  }

  export type ExpenseTrackerSumAggregateInputType = {
    totalMoney?: true
  }

  export type ExpenseTrackerMinAggregateInputType = {
    id?: true
    totalMoney?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseTrackerMaxAggregateInputType = {
    id?: true
    totalMoney?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseTrackerCountAggregateInputType = {
    id?: true
    totalMoney?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpenseTrackerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseTracker to aggregate.
     */
    where?: ExpenseTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTrackers to fetch.
     */
    orderBy?: ExpenseTrackerOrderByWithRelationInput | ExpenseTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseTrackers
    **/
    _count?: true | ExpenseTrackerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseTrackerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseTrackerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseTrackerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseTrackerMaxAggregateInputType
  }

  export type GetExpenseTrackerAggregateType<T extends ExpenseTrackerAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseTracker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseTracker[P]>
      : GetScalarType<T[P], AggregateExpenseTracker[P]>
  }




  export type ExpenseTrackerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseTrackerWhereInput
    orderBy?: ExpenseTrackerOrderByWithAggregationInput | ExpenseTrackerOrderByWithAggregationInput[]
    by: ExpenseTrackerScalarFieldEnum[] | ExpenseTrackerScalarFieldEnum
    having?: ExpenseTrackerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseTrackerCountAggregateInputType | true
    _avg?: ExpenseTrackerAvgAggregateInputType
    _sum?: ExpenseTrackerSumAggregateInputType
    _min?: ExpenseTrackerMinAggregateInputType
    _max?: ExpenseTrackerMaxAggregateInputType
  }

  export type ExpenseTrackerGroupByOutputType = {
    id: string
    totalMoney: number
    endDate: string
    createdAt: Date
    updatedAt: Date
    _count: ExpenseTrackerCountAggregateOutputType | null
    _avg: ExpenseTrackerAvgAggregateOutputType | null
    _sum: ExpenseTrackerSumAggregateOutputType | null
    _min: ExpenseTrackerMinAggregateOutputType | null
    _max: ExpenseTrackerMaxAggregateOutputType | null
  }

  type GetExpenseTrackerGroupByPayload<T extends ExpenseTrackerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseTrackerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseTrackerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseTrackerGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseTrackerGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseTrackerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalMoney?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expenses?: boolean | ExpenseTracker$expensesArgs<ExtArgs>
    _count?: boolean | ExpenseTrackerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseTracker"]>



  export type ExpenseTrackerSelectScalar = {
    id?: boolean
    totalMoney?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExpenseTrackerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalMoney" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["expenseTracker"]>
  export type ExpenseTrackerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | ExpenseTracker$expensesArgs<ExtArgs>
    _count?: boolean | ExpenseTrackerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExpenseTrackerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseTracker"
    objects: {
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalMoney: number
      endDate: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expenseTracker"]>
    composites: {}
  }

  type ExpenseTrackerGetPayload<S extends boolean | null | undefined | ExpenseTrackerDefaultArgs> = $Result.GetResult<Prisma.$ExpenseTrackerPayload, S>

  type ExpenseTrackerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseTrackerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseTrackerCountAggregateInputType | true
    }

  export interface ExpenseTrackerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseTracker'], meta: { name: 'ExpenseTracker' } }
    /**
     * Find zero or one ExpenseTracker that matches the filter.
     * @param {ExpenseTrackerFindUniqueArgs} args - Arguments to find a ExpenseTracker
     * @example
     * // Get one ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseTrackerFindUniqueArgs>(args: SelectSubset<T, ExpenseTrackerFindUniqueArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseTracker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseTrackerFindUniqueOrThrowArgs} args - Arguments to find a ExpenseTracker
     * @example
     * // Get one ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseTrackerFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseTrackerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseTracker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerFindFirstArgs} args - Arguments to find a ExpenseTracker
     * @example
     * // Get one ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseTrackerFindFirstArgs>(args?: SelectSubset<T, ExpenseTrackerFindFirstArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseTracker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerFindFirstOrThrowArgs} args - Arguments to find a ExpenseTracker
     * @example
     * // Get one ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseTrackerFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseTrackerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseTrackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseTrackers
     * const expenseTrackers = await prisma.expenseTracker.findMany()
     * 
     * // Get first 10 ExpenseTrackers
     * const expenseTrackers = await prisma.expenseTracker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseTrackerWithIdOnly = await prisma.expenseTracker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseTrackerFindManyArgs>(args?: SelectSubset<T, ExpenseTrackerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseTracker.
     * @param {ExpenseTrackerCreateArgs} args - Arguments to create a ExpenseTracker.
     * @example
     * // Create one ExpenseTracker
     * const ExpenseTracker = await prisma.expenseTracker.create({
     *   data: {
     *     // ... data to create a ExpenseTracker
     *   }
     * })
     * 
     */
    create<T extends ExpenseTrackerCreateArgs>(args: SelectSubset<T, ExpenseTrackerCreateArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseTrackers.
     * @param {ExpenseTrackerCreateManyArgs} args - Arguments to create many ExpenseTrackers.
     * @example
     * // Create many ExpenseTrackers
     * const expenseTracker = await prisma.expenseTracker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseTrackerCreateManyArgs>(args?: SelectSubset<T, ExpenseTrackerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExpenseTracker.
     * @param {ExpenseTrackerDeleteArgs} args - Arguments to delete one ExpenseTracker.
     * @example
     * // Delete one ExpenseTracker
     * const ExpenseTracker = await prisma.expenseTracker.delete({
     *   where: {
     *     // ... filter to delete one ExpenseTracker
     *   }
     * })
     * 
     */
    delete<T extends ExpenseTrackerDeleteArgs>(args: SelectSubset<T, ExpenseTrackerDeleteArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseTracker.
     * @param {ExpenseTrackerUpdateArgs} args - Arguments to update one ExpenseTracker.
     * @example
     * // Update one ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseTrackerUpdateArgs>(args: SelectSubset<T, ExpenseTrackerUpdateArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseTrackers.
     * @param {ExpenseTrackerDeleteManyArgs} args - Arguments to filter ExpenseTrackers to delete.
     * @example
     * // Delete a few ExpenseTrackers
     * const { count } = await prisma.expenseTracker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseTrackerDeleteManyArgs>(args?: SelectSubset<T, ExpenseTrackerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseTrackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseTrackers
     * const expenseTracker = await prisma.expenseTracker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseTrackerUpdateManyArgs>(args: SelectSubset<T, ExpenseTrackerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExpenseTracker.
     * @param {ExpenseTrackerUpsertArgs} args - Arguments to update or create a ExpenseTracker.
     * @example
     * // Update or create a ExpenseTracker
     * const expenseTracker = await prisma.expenseTracker.upsert({
     *   create: {
     *     // ... data to create a ExpenseTracker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseTracker we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseTrackerUpsertArgs>(args: SelectSubset<T, ExpenseTrackerUpsertArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseTrackers that matches the filter.
     * @param {ExpenseTrackerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const expenseTracker = await prisma.expenseTracker.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExpenseTrackerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ExpenseTracker.
     * @param {ExpenseTrackerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const expenseTracker = await prisma.expenseTracker.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExpenseTrackerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ExpenseTrackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerCountArgs} args - Arguments to filter ExpenseTrackers to count.
     * @example
     * // Count the number of ExpenseTrackers
     * const count = await prisma.expenseTracker.count({
     *   where: {
     *     // ... the filter for the ExpenseTrackers we want to count
     *   }
     * })
    **/
    count<T extends ExpenseTrackerCountArgs>(
      args?: Subset<T, ExpenseTrackerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseTrackerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseTracker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseTrackerAggregateArgs>(args: Subset<T, ExpenseTrackerAggregateArgs>): Prisma.PrismaPromise<GetExpenseTrackerAggregateType<T>>

    /**
     * Group by ExpenseTracker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTrackerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseTrackerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseTrackerGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseTrackerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseTrackerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseTrackerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseTracker model
   */
  readonly fields: ExpenseTrackerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseTracker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseTrackerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenses<T extends ExpenseTracker$expensesArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseTracker$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseTracker model
   */
  interface ExpenseTrackerFieldRefs {
    readonly id: FieldRef<"ExpenseTracker", 'String'>
    readonly totalMoney: FieldRef<"ExpenseTracker", 'Float'>
    readonly endDate: FieldRef<"ExpenseTracker", 'String'>
    readonly createdAt: FieldRef<"ExpenseTracker", 'DateTime'>
    readonly updatedAt: FieldRef<"ExpenseTracker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseTracker findUnique
   */
  export type ExpenseTrackerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseTracker to fetch.
     */
    where: ExpenseTrackerWhereUniqueInput
  }

  /**
   * ExpenseTracker findUniqueOrThrow
   */
  export type ExpenseTrackerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseTracker to fetch.
     */
    where: ExpenseTrackerWhereUniqueInput
  }

  /**
   * ExpenseTracker findFirst
   */
  export type ExpenseTrackerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseTracker to fetch.
     */
    where?: ExpenseTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTrackers to fetch.
     */
    orderBy?: ExpenseTrackerOrderByWithRelationInput | ExpenseTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseTrackers.
     */
    cursor?: ExpenseTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseTrackers.
     */
    distinct?: ExpenseTrackerScalarFieldEnum | ExpenseTrackerScalarFieldEnum[]
  }

  /**
   * ExpenseTracker findFirstOrThrow
   */
  export type ExpenseTrackerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseTracker to fetch.
     */
    where?: ExpenseTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTrackers to fetch.
     */
    orderBy?: ExpenseTrackerOrderByWithRelationInput | ExpenseTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseTrackers.
     */
    cursor?: ExpenseTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseTrackers.
     */
    distinct?: ExpenseTrackerScalarFieldEnum | ExpenseTrackerScalarFieldEnum[]
  }

  /**
   * ExpenseTracker findMany
   */
  export type ExpenseTrackerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseTrackers to fetch.
     */
    where?: ExpenseTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTrackers to fetch.
     */
    orderBy?: ExpenseTrackerOrderByWithRelationInput | ExpenseTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseTrackers.
     */
    cursor?: ExpenseTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTrackers.
     */
    skip?: number
    distinct?: ExpenseTrackerScalarFieldEnum | ExpenseTrackerScalarFieldEnum[]
  }

  /**
   * ExpenseTracker create
   */
  export type ExpenseTrackerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseTracker.
     */
    data: XOR<ExpenseTrackerCreateInput, ExpenseTrackerUncheckedCreateInput>
  }

  /**
   * ExpenseTracker createMany
   */
  export type ExpenseTrackerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseTrackers.
     */
    data: ExpenseTrackerCreateManyInput | ExpenseTrackerCreateManyInput[]
  }

  /**
   * ExpenseTracker update
   */
  export type ExpenseTrackerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseTracker.
     */
    data: XOR<ExpenseTrackerUpdateInput, ExpenseTrackerUncheckedUpdateInput>
    /**
     * Choose, which ExpenseTracker to update.
     */
    where: ExpenseTrackerWhereUniqueInput
  }

  /**
   * ExpenseTracker updateMany
   */
  export type ExpenseTrackerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseTrackers.
     */
    data: XOR<ExpenseTrackerUpdateManyMutationInput, ExpenseTrackerUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseTrackers to update
     */
    where?: ExpenseTrackerWhereInput
    /**
     * Limit how many ExpenseTrackers to update.
     */
    limit?: number
  }

  /**
   * ExpenseTracker upsert
   */
  export type ExpenseTrackerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseTracker to update in case it exists.
     */
    where: ExpenseTrackerWhereUniqueInput
    /**
     * In case the ExpenseTracker found by the `where` argument doesn't exist, create a new ExpenseTracker with this data.
     */
    create: XOR<ExpenseTrackerCreateInput, ExpenseTrackerUncheckedCreateInput>
    /**
     * In case the ExpenseTracker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseTrackerUpdateInput, ExpenseTrackerUncheckedUpdateInput>
  }

  /**
   * ExpenseTracker delete
   */
  export type ExpenseTrackerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
    /**
     * Filter which ExpenseTracker to delete.
     */
    where: ExpenseTrackerWhereUniqueInput
  }

  /**
   * ExpenseTracker deleteMany
   */
  export type ExpenseTrackerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseTrackers to delete
     */
    where?: ExpenseTrackerWhereInput
    /**
     * Limit how many ExpenseTrackers to delete.
     */
    limit?: number
  }

  /**
   * ExpenseTracker findRaw
   */
  export type ExpenseTrackerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ExpenseTracker aggregateRaw
   */
  export type ExpenseTrackerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ExpenseTracker.expenses
   */
  export type ExpenseTracker$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * ExpenseTracker without action
   */
  export type ExpenseTrackerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTracker
     */
    select?: ExpenseTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseTracker
     */
    omit?: ExpenseTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTrackerInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    amount: number | null
    description: string | null
    date: string | null
    createdAt: Date | null
    trackerId: string | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    description: string | null
    date: string | null
    createdAt: Date | null
    trackerId: string | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    amount: number
    description: number
    date: number
    createdAt: number
    trackerId: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
    trackerId?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
    trackerId?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
    trackerId?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    amount: number
    description: string
    date: string
    createdAt: Date
    trackerId: string
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    trackerId?: boolean
    expenseTracker?: boolean | ExpenseTrackerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>



  export type ExpenseSelectScalar = {
    id?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    trackerId?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "description" | "date" | "createdAt" | "trackerId", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenseTracker?: boolean | ExpenseTrackerDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      expenseTracker: Prisma.$ExpenseTrackerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      description: string
      date: string
      createdAt: Date
      trackerId: string
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * @param {ExpenseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const expense = await prisma.expense.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExpenseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Expense.
     * @param {ExpenseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const expense = await prisma.expense.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExpenseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenseTracker<T extends ExpenseTrackerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseTrackerDefaultArgs<ExtArgs>>): Prisma__ExpenseTrackerClient<$Result.GetResult<Prisma.$ExpenseTrackerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly date: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
    readonly trackerId: FieldRef<"Expense", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense findRaw
   */
  export type ExpenseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Expense aggregateRaw
   */
  export type ExpenseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const BeerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    region: 'region',
    alcoholContent: 'alcoholContent',
    isTested: 'isTested'
  };

  export type BeerScalarFieldEnum = (typeof BeerScalarFieldEnum)[keyof typeof BeerScalarFieldEnum]


  export const ExpenseTrackerScalarFieldEnum: {
    id: 'id',
    totalMoney: 'totalMoney',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpenseTrackerScalarFieldEnum = (typeof ExpenseTrackerScalarFieldEnum)[keyof typeof ExpenseTrackerScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    description: 'description',
    date: 'date',
    createdAt: 'createdAt',
    trackerId: 'trackerId'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BeerWhereInput = {
    AND?: BeerWhereInput | BeerWhereInput[]
    OR?: BeerWhereInput[]
    NOT?: BeerWhereInput | BeerWhereInput[]
    id?: StringFilter<"Beer"> | string
    name?: StringFilter<"Beer"> | string
    type?: StringFilter<"Beer"> | string
    region?: StringFilter<"Beer"> | string
    alcoholContent?: FloatFilter<"Beer"> | number
    isTested?: BoolFilter<"Beer"> | boolean
  }

  export type BeerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    region?: SortOrder
    alcoholContent?: SortOrder
    isTested?: SortOrder
  }

  export type BeerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BeerWhereInput | BeerWhereInput[]
    OR?: BeerWhereInput[]
    NOT?: BeerWhereInput | BeerWhereInput[]
    name?: StringFilter<"Beer"> | string
    type?: StringFilter<"Beer"> | string
    region?: StringFilter<"Beer"> | string
    alcoholContent?: FloatFilter<"Beer"> | number
    isTested?: BoolFilter<"Beer"> | boolean
  }, "id">

  export type BeerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    region?: SortOrder
    alcoholContent?: SortOrder
    isTested?: SortOrder
    _count?: BeerCountOrderByAggregateInput
    _avg?: BeerAvgOrderByAggregateInput
    _max?: BeerMaxOrderByAggregateInput
    _min?: BeerMinOrderByAggregateInput
    _sum?: BeerSumOrderByAggregateInput
  }

  export type BeerScalarWhereWithAggregatesInput = {
    AND?: BeerScalarWhereWithAggregatesInput | BeerScalarWhereWithAggregatesInput[]
    OR?: BeerScalarWhereWithAggregatesInput[]
    NOT?: BeerScalarWhereWithAggregatesInput | BeerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Beer"> | string
    name?: StringWithAggregatesFilter<"Beer"> | string
    type?: StringWithAggregatesFilter<"Beer"> | string
    region?: StringWithAggregatesFilter<"Beer"> | string
    alcoholContent?: FloatWithAggregatesFilter<"Beer"> | number
    isTested?: BoolWithAggregatesFilter<"Beer"> | boolean
  }

  export type ExpenseTrackerWhereInput = {
    AND?: ExpenseTrackerWhereInput | ExpenseTrackerWhereInput[]
    OR?: ExpenseTrackerWhereInput[]
    NOT?: ExpenseTrackerWhereInput | ExpenseTrackerWhereInput[]
    id?: StringFilter<"ExpenseTracker"> | string
    totalMoney?: FloatFilter<"ExpenseTracker"> | number
    endDate?: StringFilter<"ExpenseTracker"> | string
    createdAt?: DateTimeFilter<"ExpenseTracker"> | Date | string
    updatedAt?: DateTimeFilter<"ExpenseTracker"> | Date | string
    expenses?: ExpenseListRelationFilter
  }

  export type ExpenseTrackerOrderByWithRelationInput = {
    id?: SortOrder
    totalMoney?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type ExpenseTrackerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseTrackerWhereInput | ExpenseTrackerWhereInput[]
    OR?: ExpenseTrackerWhereInput[]
    NOT?: ExpenseTrackerWhereInput | ExpenseTrackerWhereInput[]
    totalMoney?: FloatFilter<"ExpenseTracker"> | number
    endDate?: StringFilter<"ExpenseTracker"> | string
    createdAt?: DateTimeFilter<"ExpenseTracker"> | Date | string
    updatedAt?: DateTimeFilter<"ExpenseTracker"> | Date | string
    expenses?: ExpenseListRelationFilter
  }, "id">

  export type ExpenseTrackerOrderByWithAggregationInput = {
    id?: SortOrder
    totalMoney?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExpenseTrackerCountOrderByAggregateInput
    _avg?: ExpenseTrackerAvgOrderByAggregateInput
    _max?: ExpenseTrackerMaxOrderByAggregateInput
    _min?: ExpenseTrackerMinOrderByAggregateInput
    _sum?: ExpenseTrackerSumOrderByAggregateInput
  }

  export type ExpenseTrackerScalarWhereWithAggregatesInput = {
    AND?: ExpenseTrackerScalarWhereWithAggregatesInput | ExpenseTrackerScalarWhereWithAggregatesInput[]
    OR?: ExpenseTrackerScalarWhereWithAggregatesInput[]
    NOT?: ExpenseTrackerScalarWhereWithAggregatesInput | ExpenseTrackerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpenseTracker"> | string
    totalMoney?: FloatWithAggregatesFilter<"ExpenseTracker"> | number
    endDate?: StringWithAggregatesFilter<"ExpenseTracker"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExpenseTracker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExpenseTracker"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    description?: StringFilter<"Expense"> | string
    date?: StringFilter<"Expense"> | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    trackerId?: StringFilter<"Expense"> | string
    expenseTracker?: XOR<ExpenseTrackerScalarRelationFilter, ExpenseTrackerWhereInput>
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    trackerId?: SortOrder
    expenseTracker?: ExpenseTrackerOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    amount?: FloatFilter<"Expense"> | number
    description?: StringFilter<"Expense"> | string
    date?: StringFilter<"Expense"> | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    trackerId?: StringFilter<"Expense"> | string
    expenseTracker?: XOR<ExpenseTrackerScalarRelationFilter, ExpenseTrackerWhereInput>
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    trackerId?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    description?: StringWithAggregatesFilter<"Expense"> | string
    date?: StringWithAggregatesFilter<"Expense"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    trackerId?: StringWithAggregatesFilter<"Expense"> | string
  }

  export type BeerCreateInput = {
    id?: string
    name: string
    type: string
    region: string
    alcoholContent: number
    isTested: boolean
  }

  export type BeerUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    region: string
    alcoholContent: number
    isTested: boolean
  }

  export type BeerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    alcoholContent?: FloatFieldUpdateOperationsInput | number
    isTested?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BeerUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    alcoholContent?: FloatFieldUpdateOperationsInput | number
    isTested?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BeerCreateManyInput = {
    id?: string
    name: string
    type: string
    region: string
    alcoholContent: number
    isTested: boolean
  }

  export type BeerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    alcoholContent?: FloatFieldUpdateOperationsInput | number
    isTested?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BeerUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    alcoholContent?: FloatFieldUpdateOperationsInput | number
    isTested?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseTrackerCreateInput = {
    id?: string
    totalMoney: number
    endDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: ExpenseCreateNestedManyWithoutExpenseTrackerInput
  }

  export type ExpenseTrackerUncheckedCreateInput = {
    id?: string
    totalMoney: number
    endDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutExpenseTrackerInput
  }

  export type ExpenseTrackerUpdateInput = {
    totalMoney?: FloatFieldUpdateOperationsInput | number
    endDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUpdateManyWithoutExpenseTrackerNestedInput
  }

  export type ExpenseTrackerUncheckedUpdateInput = {
    totalMoney?: FloatFieldUpdateOperationsInput | number
    endDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutExpenseTrackerNestedInput
  }

  export type ExpenseTrackerCreateManyInput = {
    id?: string
    totalMoney: number
    endDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseTrackerUpdateManyMutationInput = {
    totalMoney?: FloatFieldUpdateOperationsInput | number
    endDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseTrackerUncheckedUpdateManyInput = {
    totalMoney?: FloatFieldUpdateOperationsInput | number
    endDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    id?: string
    amount: number
    description: string
    date: string
    createdAt?: Date | string
    expenseTracker: ExpenseTrackerCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    amount: number
    description: string
    date: string
    createdAt?: Date | string
    trackerId: string
  }

  export type ExpenseUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenseTracker?: ExpenseTrackerUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackerId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseCreateManyInput = {
    id?: string
    amount: number
    description: string
    date: string
    createdAt?: Date | string
    trackerId: string
  }

  export type ExpenseUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackerId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BeerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    region?: SortOrder
    alcoholContent?: SortOrder
    isTested?: SortOrder
  }

  export type BeerAvgOrderByAggregateInput = {
    alcoholContent?: SortOrder
  }

  export type BeerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    region?: SortOrder
    alcoholContent?: SortOrder
    isTested?: SortOrder
  }

  export type BeerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    region?: SortOrder
    alcoholContent?: SortOrder
    isTested?: SortOrder
  }

  export type BeerSumOrderByAggregateInput = {
    alcoholContent?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseTrackerCountOrderByAggregateInput = {
    id?: SortOrder
    totalMoney?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseTrackerAvgOrderByAggregateInput = {
    totalMoney?: SortOrder
  }

  export type ExpenseTrackerMaxOrderByAggregateInput = {
    id?: SortOrder
    totalMoney?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseTrackerMinOrderByAggregateInput = {
    id?: SortOrder
    totalMoney?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseTrackerSumOrderByAggregateInput = {
    totalMoney?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExpenseTrackerScalarRelationFilter = {
    is?: ExpenseTrackerWhereInput
    isNot?: ExpenseTrackerWhereInput
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    trackerId?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    trackerId?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    trackerId?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ExpenseCreateNestedManyWithoutExpenseTrackerInput = {
    create?: XOR<ExpenseCreateWithoutExpenseTrackerInput, ExpenseUncheckedCreateWithoutExpenseTrackerInput> | ExpenseCreateWithoutExpenseTrackerInput[] | ExpenseUncheckedCreateWithoutExpenseTrackerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutExpenseTrackerInput | ExpenseCreateOrConnectWithoutExpenseTrackerInput[]
    createMany?: ExpenseCreateManyExpenseTrackerInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutExpenseTrackerInput = {
    create?: XOR<ExpenseCreateWithoutExpenseTrackerInput, ExpenseUncheckedCreateWithoutExpenseTrackerInput> | ExpenseCreateWithoutExpenseTrackerInput[] | ExpenseUncheckedCreateWithoutExpenseTrackerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutExpenseTrackerInput | ExpenseCreateOrConnectWithoutExpenseTrackerInput[]
    createMany?: ExpenseCreateManyExpenseTrackerInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExpenseUpdateManyWithoutExpenseTrackerNestedInput = {
    create?: XOR<ExpenseCreateWithoutExpenseTrackerInput, ExpenseUncheckedCreateWithoutExpenseTrackerInput> | ExpenseCreateWithoutExpenseTrackerInput[] | ExpenseUncheckedCreateWithoutExpenseTrackerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutExpenseTrackerInput | ExpenseCreateOrConnectWithoutExpenseTrackerInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutExpenseTrackerInput | ExpenseUpsertWithWhereUniqueWithoutExpenseTrackerInput[]
    createMany?: ExpenseCreateManyExpenseTrackerInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutExpenseTrackerInput | ExpenseUpdateWithWhereUniqueWithoutExpenseTrackerInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutExpenseTrackerInput | ExpenseUpdateManyWithWhereWithoutExpenseTrackerInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutExpenseTrackerNestedInput = {
    create?: XOR<ExpenseCreateWithoutExpenseTrackerInput, ExpenseUncheckedCreateWithoutExpenseTrackerInput> | ExpenseCreateWithoutExpenseTrackerInput[] | ExpenseUncheckedCreateWithoutExpenseTrackerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutExpenseTrackerInput | ExpenseCreateOrConnectWithoutExpenseTrackerInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutExpenseTrackerInput | ExpenseUpsertWithWhereUniqueWithoutExpenseTrackerInput[]
    createMany?: ExpenseCreateManyExpenseTrackerInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutExpenseTrackerInput | ExpenseUpdateWithWhereUniqueWithoutExpenseTrackerInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutExpenseTrackerInput | ExpenseUpdateManyWithWhereWithoutExpenseTrackerInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseTrackerCreateNestedOneWithoutExpensesInput = {
    create?: XOR<ExpenseTrackerCreateWithoutExpensesInput, ExpenseTrackerUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: ExpenseTrackerCreateOrConnectWithoutExpensesInput
    connect?: ExpenseTrackerWhereUniqueInput
  }

  export type ExpenseTrackerUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<ExpenseTrackerCreateWithoutExpensesInput, ExpenseTrackerUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: ExpenseTrackerCreateOrConnectWithoutExpensesInput
    upsert?: ExpenseTrackerUpsertWithoutExpensesInput
    connect?: ExpenseTrackerWhereUniqueInput
    update?: XOR<XOR<ExpenseTrackerUpdateToOneWithWhereWithoutExpensesInput, ExpenseTrackerUpdateWithoutExpensesInput>, ExpenseTrackerUncheckedUpdateWithoutExpensesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExpenseCreateWithoutExpenseTrackerInput = {
    id?: string
    amount: number
    description: string
    date: string
    createdAt?: Date | string
  }

  export type ExpenseUncheckedCreateWithoutExpenseTrackerInput = {
    id?: string
    amount: number
    description: string
    date: string
    createdAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutExpenseTrackerInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutExpenseTrackerInput, ExpenseUncheckedCreateWithoutExpenseTrackerInput>
  }

  export type ExpenseCreateManyExpenseTrackerInputEnvelope = {
    data: ExpenseCreateManyExpenseTrackerInput | ExpenseCreateManyExpenseTrackerInput[]
  }

  export type ExpenseUpsertWithWhereUniqueWithoutExpenseTrackerInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutExpenseTrackerInput, ExpenseUncheckedUpdateWithoutExpenseTrackerInput>
    create: XOR<ExpenseCreateWithoutExpenseTrackerInput, ExpenseUncheckedCreateWithoutExpenseTrackerInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutExpenseTrackerInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutExpenseTrackerInput, ExpenseUncheckedUpdateWithoutExpenseTrackerInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutExpenseTrackerInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutExpenseTrackerInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    description?: StringFilter<"Expense"> | string
    date?: StringFilter<"Expense"> | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    trackerId?: StringFilter<"Expense"> | string
  }

  export type ExpenseTrackerCreateWithoutExpensesInput = {
    id?: string
    totalMoney: number
    endDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseTrackerUncheckedCreateWithoutExpensesInput = {
    id?: string
    totalMoney: number
    endDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseTrackerCreateOrConnectWithoutExpensesInput = {
    where: ExpenseTrackerWhereUniqueInput
    create: XOR<ExpenseTrackerCreateWithoutExpensesInput, ExpenseTrackerUncheckedCreateWithoutExpensesInput>
  }

  export type ExpenseTrackerUpsertWithoutExpensesInput = {
    update: XOR<ExpenseTrackerUpdateWithoutExpensesInput, ExpenseTrackerUncheckedUpdateWithoutExpensesInput>
    create: XOR<ExpenseTrackerCreateWithoutExpensesInput, ExpenseTrackerUncheckedCreateWithoutExpensesInput>
    where?: ExpenseTrackerWhereInput
  }

  export type ExpenseTrackerUpdateToOneWithWhereWithoutExpensesInput = {
    where?: ExpenseTrackerWhereInput
    data: XOR<ExpenseTrackerUpdateWithoutExpensesInput, ExpenseTrackerUncheckedUpdateWithoutExpensesInput>
  }

  export type ExpenseTrackerUpdateWithoutExpensesInput = {
    totalMoney?: FloatFieldUpdateOperationsInput | number
    endDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseTrackerUncheckedUpdateWithoutExpensesInput = {
    totalMoney?: FloatFieldUpdateOperationsInput | number
    endDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyExpenseTrackerInput = {
    id?: string
    amount: number
    description: string
    date: string
    createdAt?: Date | string
  }

  export type ExpenseUpdateWithoutExpenseTrackerInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateWithoutExpenseTrackerInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutExpenseTrackerInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}