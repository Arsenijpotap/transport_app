
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
 * Model GomelStations
 * 
 */
export type GomelStations = $Result.DefaultSelection<Prisma.$GomelStationsPayload>
/**
 * Model GomelTransport
 * 
 */
export type GomelTransport = $Result.DefaultSelection<Prisma.$GomelTransportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Type: {
  Bus: 'Bus',
  TaxiBus: 'TaxiBus'
};

export type Type = (typeof Type)[keyof typeof Type]

}

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GomelStations
 * const gomelStations = await prisma.gomelStations.findMany()
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
   * // Fetch zero or more GomelStations
   * const gomelStations = await prisma.gomelStations.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.gomelStations`: Exposes CRUD operations for the **GomelStations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GomelStations
    * const gomelStations = await prisma.gomelStations.findMany()
    * ```
    */
  get gomelStations(): Prisma.GomelStationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gomelTransport`: Exposes CRUD operations for the **GomelTransport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GomelTransports
    * const gomelTransports = await prisma.gomelTransport.findMany()
    * ```
    */
  get gomelTransport(): Prisma.GomelTransportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    GomelStations: 'GomelStations',
    GomelTransport: 'GomelTransport'
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
      modelProps: "gomelStations" | "gomelTransport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GomelStations: {
        payload: Prisma.$GomelStationsPayload<ExtArgs>
        fields: Prisma.GomelStationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GomelStationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelStationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GomelStationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelStationsPayload>
          }
          findFirst: {
            args: Prisma.GomelStationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelStationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GomelStationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelStationsPayload>
          }
          findMany: {
            args: Prisma.GomelStationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelStationsPayload>[]
          }
          create: {
            args: Prisma.GomelStationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelStationsPayload>
          }
          createMany: {
            args: Prisma.GomelStationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GomelStationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelStationsPayload>[]
          }
          delete: {
            args: Prisma.GomelStationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelStationsPayload>
          }
          update: {
            args: Prisma.GomelStationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelStationsPayload>
          }
          deleteMany: {
            args: Prisma.GomelStationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GomelStationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GomelStationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelStationsPayload>[]
          }
          upsert: {
            args: Prisma.GomelStationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelStationsPayload>
          }
          aggregate: {
            args: Prisma.GomelStationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGomelStations>
          }
          groupBy: {
            args: Prisma.GomelStationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GomelStationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GomelStationsCountArgs<ExtArgs>
            result: $Utils.Optional<GomelStationsCountAggregateOutputType> | number
          }
        }
      }
      GomelTransport: {
        payload: Prisma.$GomelTransportPayload<ExtArgs>
        fields: Prisma.GomelTransportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GomelTransportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelTransportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GomelTransportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelTransportPayload>
          }
          findFirst: {
            args: Prisma.GomelTransportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelTransportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GomelTransportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelTransportPayload>
          }
          findMany: {
            args: Prisma.GomelTransportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelTransportPayload>[]
          }
          create: {
            args: Prisma.GomelTransportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelTransportPayload>
          }
          createMany: {
            args: Prisma.GomelTransportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GomelTransportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelTransportPayload>[]
          }
          delete: {
            args: Prisma.GomelTransportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelTransportPayload>
          }
          update: {
            args: Prisma.GomelTransportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelTransportPayload>
          }
          deleteMany: {
            args: Prisma.GomelTransportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GomelTransportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GomelTransportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelTransportPayload>[]
          }
          upsert: {
            args: Prisma.GomelTransportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GomelTransportPayload>
          }
          aggregate: {
            args: Prisma.GomelTransportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGomelTransport>
          }
          groupBy: {
            args: Prisma.GomelTransportGroupByArgs<ExtArgs>
            result: $Utils.Optional<GomelTransportGroupByOutputType>[]
          }
          count: {
            args: Prisma.GomelTransportCountArgs<ExtArgs>
            result: $Utils.Optional<GomelTransportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    gomelStations?: GomelStationsOmit
    gomelTransport?: GomelTransportOmit
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
   * Count Type GomelStationsCountOutputType
   */

  export type GomelStationsCountOutputType = {
    asFinalPoint: number
    asStartingPoint: number
  }

  export type GomelStationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asFinalPoint?: boolean | GomelStationsCountOutputTypeCountAsFinalPointArgs
    asStartingPoint?: boolean | GomelStationsCountOutputTypeCountAsStartingPointArgs
  }

  // Custom InputTypes
  /**
   * GomelStationsCountOutputType without action
   */
  export type GomelStationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStationsCountOutputType
     */
    select?: GomelStationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GomelStationsCountOutputType without action
   */
  export type GomelStationsCountOutputTypeCountAsFinalPointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GomelTransportWhereInput
  }

  /**
   * GomelStationsCountOutputType without action
   */
  export type GomelStationsCountOutputTypeCountAsStartingPointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GomelTransportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model GomelStations
   */

  export type AggregateGomelStations = {
    _count: GomelStationsCountAggregateOutputType | null
    _avg: GomelStationsAvgAggregateOutputType | null
    _sum: GomelStationsSumAggregateOutputType | null
    _min: GomelStationsMinAggregateOutputType | null
    _max: GomelStationsMaxAggregateOutputType | null
  }

  export type GomelStationsAvgAggregateOutputType = {
    id: number | null
  }

  export type GomelStationsSumAggregateOutputType = {
    id: number | null
  }

  export type GomelStationsMinAggregateOutputType = {
    id: number | null
    name: string | null
    shortName: string | null
  }

  export type GomelStationsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    shortName: string | null
  }

  export type GomelStationsCountAggregateOutputType = {
    id: number
    name: number
    shortName: number
    _all: number
  }


  export type GomelStationsAvgAggregateInputType = {
    id?: true
  }

  export type GomelStationsSumAggregateInputType = {
    id?: true
  }

  export type GomelStationsMinAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
  }

  export type GomelStationsMaxAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
  }

  export type GomelStationsCountAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    _all?: true
  }

  export type GomelStationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GomelStations to aggregate.
     */
    where?: GomelStationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GomelStations to fetch.
     */
    orderBy?: GomelStationsOrderByWithRelationInput | GomelStationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GomelStationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GomelStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GomelStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GomelStations
    **/
    _count?: true | GomelStationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GomelStationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GomelStationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GomelStationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GomelStationsMaxAggregateInputType
  }

  export type GetGomelStationsAggregateType<T extends GomelStationsAggregateArgs> = {
        [P in keyof T & keyof AggregateGomelStations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGomelStations[P]>
      : GetScalarType<T[P], AggregateGomelStations[P]>
  }




  export type GomelStationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GomelStationsWhereInput
    orderBy?: GomelStationsOrderByWithAggregationInput | GomelStationsOrderByWithAggregationInput[]
    by: GomelStationsScalarFieldEnum[] | GomelStationsScalarFieldEnum
    having?: GomelStationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GomelStationsCountAggregateInputType | true
    _avg?: GomelStationsAvgAggregateInputType
    _sum?: GomelStationsSumAggregateInputType
    _min?: GomelStationsMinAggregateInputType
    _max?: GomelStationsMaxAggregateInputType
  }

  export type GomelStationsGroupByOutputType = {
    id: number
    name: string
    shortName: string | null
    _count: GomelStationsCountAggregateOutputType | null
    _avg: GomelStationsAvgAggregateOutputType | null
    _sum: GomelStationsSumAggregateOutputType | null
    _min: GomelStationsMinAggregateOutputType | null
    _max: GomelStationsMaxAggregateOutputType | null
  }

  type GetGomelStationsGroupByPayload<T extends GomelStationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GomelStationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GomelStationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GomelStationsGroupByOutputType[P]>
            : GetScalarType<T[P], GomelStationsGroupByOutputType[P]>
        }
      >
    >


  export type GomelStationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    asFinalPoint?: boolean | GomelStations$asFinalPointArgs<ExtArgs>
    asStartingPoint?: boolean | GomelStations$asStartingPointArgs<ExtArgs>
    _count?: boolean | GomelStationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gomelStations"]>

  export type GomelStationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
  }, ExtArgs["result"]["gomelStations"]>

  export type GomelStationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
  }, ExtArgs["result"]["gomelStations"]>

  export type GomelStationsSelectScalar = {
    id?: boolean
    name?: boolean
    shortName?: boolean
  }

  export type GomelStationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shortName", ExtArgs["result"]["gomelStations"]>
  export type GomelStationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asFinalPoint?: boolean | GomelStations$asFinalPointArgs<ExtArgs>
    asStartingPoint?: boolean | GomelStations$asStartingPointArgs<ExtArgs>
    _count?: boolean | GomelStationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GomelStationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GomelStationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GomelStationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GomelStations"
    objects: {
      asFinalPoint: Prisma.$GomelTransportPayload<ExtArgs>[]
      asStartingPoint: Prisma.$GomelTransportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      shortName: string | null
    }, ExtArgs["result"]["gomelStations"]>
    composites: {}
  }

  type GomelStationsGetPayload<S extends boolean | null | undefined | GomelStationsDefaultArgs> = $Result.GetResult<Prisma.$GomelStationsPayload, S>

  type GomelStationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GomelStationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GomelStationsCountAggregateInputType | true
    }

  export interface GomelStationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GomelStations'], meta: { name: 'GomelStations' } }
    /**
     * Find zero or one GomelStations that matches the filter.
     * @param {GomelStationsFindUniqueArgs} args - Arguments to find a GomelStations
     * @example
     * // Get one GomelStations
     * const gomelStations = await prisma.gomelStations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GomelStationsFindUniqueArgs>(args: SelectSubset<T, GomelStationsFindUniqueArgs<ExtArgs>>): Prisma__GomelStationsClient<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GomelStations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GomelStationsFindUniqueOrThrowArgs} args - Arguments to find a GomelStations
     * @example
     * // Get one GomelStations
     * const gomelStations = await prisma.gomelStations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GomelStationsFindUniqueOrThrowArgs>(args: SelectSubset<T, GomelStationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GomelStationsClient<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GomelStations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelStationsFindFirstArgs} args - Arguments to find a GomelStations
     * @example
     * // Get one GomelStations
     * const gomelStations = await prisma.gomelStations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GomelStationsFindFirstArgs>(args?: SelectSubset<T, GomelStationsFindFirstArgs<ExtArgs>>): Prisma__GomelStationsClient<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GomelStations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelStationsFindFirstOrThrowArgs} args - Arguments to find a GomelStations
     * @example
     * // Get one GomelStations
     * const gomelStations = await prisma.gomelStations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GomelStationsFindFirstOrThrowArgs>(args?: SelectSubset<T, GomelStationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GomelStationsClient<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GomelStations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelStationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GomelStations
     * const gomelStations = await prisma.gomelStations.findMany()
     * 
     * // Get first 10 GomelStations
     * const gomelStations = await prisma.gomelStations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gomelStationsWithIdOnly = await prisma.gomelStations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GomelStationsFindManyArgs>(args?: SelectSubset<T, GomelStationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GomelStations.
     * @param {GomelStationsCreateArgs} args - Arguments to create a GomelStations.
     * @example
     * // Create one GomelStations
     * const GomelStations = await prisma.gomelStations.create({
     *   data: {
     *     // ... data to create a GomelStations
     *   }
     * })
     * 
     */
    create<T extends GomelStationsCreateArgs>(args: SelectSubset<T, GomelStationsCreateArgs<ExtArgs>>): Prisma__GomelStationsClient<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GomelStations.
     * @param {GomelStationsCreateManyArgs} args - Arguments to create many GomelStations.
     * @example
     * // Create many GomelStations
     * const gomelStations = await prisma.gomelStations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GomelStationsCreateManyArgs>(args?: SelectSubset<T, GomelStationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GomelStations and returns the data saved in the database.
     * @param {GomelStationsCreateManyAndReturnArgs} args - Arguments to create many GomelStations.
     * @example
     * // Create many GomelStations
     * const gomelStations = await prisma.gomelStations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GomelStations and only return the `id`
     * const gomelStationsWithIdOnly = await prisma.gomelStations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GomelStationsCreateManyAndReturnArgs>(args?: SelectSubset<T, GomelStationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GomelStations.
     * @param {GomelStationsDeleteArgs} args - Arguments to delete one GomelStations.
     * @example
     * // Delete one GomelStations
     * const GomelStations = await prisma.gomelStations.delete({
     *   where: {
     *     // ... filter to delete one GomelStations
     *   }
     * })
     * 
     */
    delete<T extends GomelStationsDeleteArgs>(args: SelectSubset<T, GomelStationsDeleteArgs<ExtArgs>>): Prisma__GomelStationsClient<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GomelStations.
     * @param {GomelStationsUpdateArgs} args - Arguments to update one GomelStations.
     * @example
     * // Update one GomelStations
     * const gomelStations = await prisma.gomelStations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GomelStationsUpdateArgs>(args: SelectSubset<T, GomelStationsUpdateArgs<ExtArgs>>): Prisma__GomelStationsClient<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GomelStations.
     * @param {GomelStationsDeleteManyArgs} args - Arguments to filter GomelStations to delete.
     * @example
     * // Delete a few GomelStations
     * const { count } = await prisma.gomelStations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GomelStationsDeleteManyArgs>(args?: SelectSubset<T, GomelStationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GomelStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelStationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GomelStations
     * const gomelStations = await prisma.gomelStations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GomelStationsUpdateManyArgs>(args: SelectSubset<T, GomelStationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GomelStations and returns the data updated in the database.
     * @param {GomelStationsUpdateManyAndReturnArgs} args - Arguments to update many GomelStations.
     * @example
     * // Update many GomelStations
     * const gomelStations = await prisma.gomelStations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GomelStations and only return the `id`
     * const gomelStationsWithIdOnly = await prisma.gomelStations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GomelStationsUpdateManyAndReturnArgs>(args: SelectSubset<T, GomelStationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GomelStations.
     * @param {GomelStationsUpsertArgs} args - Arguments to update or create a GomelStations.
     * @example
     * // Update or create a GomelStations
     * const gomelStations = await prisma.gomelStations.upsert({
     *   create: {
     *     // ... data to create a GomelStations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GomelStations we want to update
     *   }
     * })
     */
    upsert<T extends GomelStationsUpsertArgs>(args: SelectSubset<T, GomelStationsUpsertArgs<ExtArgs>>): Prisma__GomelStationsClient<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GomelStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelStationsCountArgs} args - Arguments to filter GomelStations to count.
     * @example
     * // Count the number of GomelStations
     * const count = await prisma.gomelStations.count({
     *   where: {
     *     // ... the filter for the GomelStations we want to count
     *   }
     * })
    **/
    count<T extends GomelStationsCountArgs>(
      args?: Subset<T, GomelStationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GomelStationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GomelStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelStationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GomelStationsAggregateArgs>(args: Subset<T, GomelStationsAggregateArgs>): Prisma.PrismaPromise<GetGomelStationsAggregateType<T>>

    /**
     * Group by GomelStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelStationsGroupByArgs} args - Group by arguments.
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
      T extends GomelStationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GomelStationsGroupByArgs['orderBy'] }
        : { orderBy?: GomelStationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GomelStationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGomelStationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GomelStations model
   */
  readonly fields: GomelStationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GomelStations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GomelStationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asFinalPoint<T extends GomelStations$asFinalPointArgs<ExtArgs> = {}>(args?: Subset<T, GomelStations$asFinalPointArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    asStartingPoint<T extends GomelStations$asStartingPointArgs<ExtArgs> = {}>(args?: Subset<T, GomelStations$asStartingPointArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GomelStations model
   */
  interface GomelStationsFieldRefs {
    readonly id: FieldRef<"GomelStations", 'Int'>
    readonly name: FieldRef<"GomelStations", 'String'>
    readonly shortName: FieldRef<"GomelStations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GomelStations findUnique
   */
  export type GomelStationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelStationsInclude<ExtArgs> | null
    /**
     * Filter, which GomelStations to fetch.
     */
    where: GomelStationsWhereUniqueInput
  }

  /**
   * GomelStations findUniqueOrThrow
   */
  export type GomelStationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelStationsInclude<ExtArgs> | null
    /**
     * Filter, which GomelStations to fetch.
     */
    where: GomelStationsWhereUniqueInput
  }

  /**
   * GomelStations findFirst
   */
  export type GomelStationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelStationsInclude<ExtArgs> | null
    /**
     * Filter, which GomelStations to fetch.
     */
    where?: GomelStationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GomelStations to fetch.
     */
    orderBy?: GomelStationsOrderByWithRelationInput | GomelStationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GomelStations.
     */
    cursor?: GomelStationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GomelStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GomelStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GomelStations.
     */
    distinct?: GomelStationsScalarFieldEnum | GomelStationsScalarFieldEnum[]
  }

  /**
   * GomelStations findFirstOrThrow
   */
  export type GomelStationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelStationsInclude<ExtArgs> | null
    /**
     * Filter, which GomelStations to fetch.
     */
    where?: GomelStationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GomelStations to fetch.
     */
    orderBy?: GomelStationsOrderByWithRelationInput | GomelStationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GomelStations.
     */
    cursor?: GomelStationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GomelStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GomelStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GomelStations.
     */
    distinct?: GomelStationsScalarFieldEnum | GomelStationsScalarFieldEnum[]
  }

  /**
   * GomelStations findMany
   */
  export type GomelStationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelStationsInclude<ExtArgs> | null
    /**
     * Filter, which GomelStations to fetch.
     */
    where?: GomelStationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GomelStations to fetch.
     */
    orderBy?: GomelStationsOrderByWithRelationInput | GomelStationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GomelStations.
     */
    cursor?: GomelStationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GomelStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GomelStations.
     */
    skip?: number
    distinct?: GomelStationsScalarFieldEnum | GomelStationsScalarFieldEnum[]
  }

  /**
   * GomelStations create
   */
  export type GomelStationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelStationsInclude<ExtArgs> | null
    /**
     * The data needed to create a GomelStations.
     */
    data: XOR<GomelStationsCreateInput, GomelStationsUncheckedCreateInput>
  }

  /**
   * GomelStations createMany
   */
  export type GomelStationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GomelStations.
     */
    data: GomelStationsCreateManyInput | GomelStationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GomelStations createManyAndReturn
   */
  export type GomelStationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * The data used to create many GomelStations.
     */
    data: GomelStationsCreateManyInput | GomelStationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GomelStations update
   */
  export type GomelStationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelStationsInclude<ExtArgs> | null
    /**
     * The data needed to update a GomelStations.
     */
    data: XOR<GomelStationsUpdateInput, GomelStationsUncheckedUpdateInput>
    /**
     * Choose, which GomelStations to update.
     */
    where: GomelStationsWhereUniqueInput
  }

  /**
   * GomelStations updateMany
   */
  export type GomelStationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GomelStations.
     */
    data: XOR<GomelStationsUpdateManyMutationInput, GomelStationsUncheckedUpdateManyInput>
    /**
     * Filter which GomelStations to update
     */
    where?: GomelStationsWhereInput
    /**
     * Limit how many GomelStations to update.
     */
    limit?: number
  }

  /**
   * GomelStations updateManyAndReturn
   */
  export type GomelStationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * The data used to update GomelStations.
     */
    data: XOR<GomelStationsUpdateManyMutationInput, GomelStationsUncheckedUpdateManyInput>
    /**
     * Filter which GomelStations to update
     */
    where?: GomelStationsWhereInput
    /**
     * Limit how many GomelStations to update.
     */
    limit?: number
  }

  /**
   * GomelStations upsert
   */
  export type GomelStationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelStationsInclude<ExtArgs> | null
    /**
     * The filter to search for the GomelStations to update in case it exists.
     */
    where: GomelStationsWhereUniqueInput
    /**
     * In case the GomelStations found by the `where` argument doesn't exist, create a new GomelStations with this data.
     */
    create: XOR<GomelStationsCreateInput, GomelStationsUncheckedCreateInput>
    /**
     * In case the GomelStations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GomelStationsUpdateInput, GomelStationsUncheckedUpdateInput>
  }

  /**
   * GomelStations delete
   */
  export type GomelStationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelStationsInclude<ExtArgs> | null
    /**
     * Filter which GomelStations to delete.
     */
    where: GomelStationsWhereUniqueInput
  }

  /**
   * GomelStations deleteMany
   */
  export type GomelStationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GomelStations to delete
     */
    where?: GomelStationsWhereInput
    /**
     * Limit how many GomelStations to delete.
     */
    limit?: number
  }

  /**
   * GomelStations.asFinalPoint
   */
  export type GomelStations$asFinalPointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
    where?: GomelTransportWhereInput
    orderBy?: GomelTransportOrderByWithRelationInput | GomelTransportOrderByWithRelationInput[]
    cursor?: GomelTransportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GomelTransportScalarFieldEnum | GomelTransportScalarFieldEnum[]
  }

  /**
   * GomelStations.asStartingPoint
   */
  export type GomelStations$asStartingPointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
    where?: GomelTransportWhereInput
    orderBy?: GomelTransportOrderByWithRelationInput | GomelTransportOrderByWithRelationInput[]
    cursor?: GomelTransportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GomelTransportScalarFieldEnum | GomelTransportScalarFieldEnum[]
  }

  /**
   * GomelStations without action
   */
  export type GomelStationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelStations
     */
    select?: GomelStationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelStations
     */
    omit?: GomelStationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelStationsInclude<ExtArgs> | null
  }


  /**
   * Model GomelTransport
   */

  export type AggregateGomelTransport = {
    _count: GomelTransportCountAggregateOutputType | null
    _avg: GomelTransportAvgAggregateOutputType | null
    _sum: GomelTransportSumAggregateOutputType | null
    _min: GomelTransportMinAggregateOutputType | null
    _max: GomelTransportMaxAggregateOutputType | null
  }

  export type GomelTransportAvgAggregateOutputType = {
    id: number | null
    startingPointId: number | null
    finalPointId: number | null
  }

  export type GomelTransportSumAggregateOutputType = {
    id: number | null
    startingPointId: number | null
    finalPointId: number | null
  }

  export type GomelTransportMinAggregateOutputType = {
    id: number | null
    startingPointId: number | null
    finalPointId: number | null
    peculiarity: string | null
    departureTime: string | null
    arrivalTime: string | null
    type: $Enums.Type | null
    weekDays: string | null
  }

  export type GomelTransportMaxAggregateOutputType = {
    id: number | null
    startingPointId: number | null
    finalPointId: number | null
    peculiarity: string | null
    departureTime: string | null
    arrivalTime: string | null
    type: $Enums.Type | null
    weekDays: string | null
  }

  export type GomelTransportCountAggregateOutputType = {
    id: number
    startingPointId: number
    finalPointId: number
    peculiarity: number
    departureTime: number
    arrivalTime: number
    type: number
    weekDays: number
    _all: number
  }


  export type GomelTransportAvgAggregateInputType = {
    id?: true
    startingPointId?: true
    finalPointId?: true
  }

  export type GomelTransportSumAggregateInputType = {
    id?: true
    startingPointId?: true
    finalPointId?: true
  }

  export type GomelTransportMinAggregateInputType = {
    id?: true
    startingPointId?: true
    finalPointId?: true
    peculiarity?: true
    departureTime?: true
    arrivalTime?: true
    type?: true
    weekDays?: true
  }

  export type GomelTransportMaxAggregateInputType = {
    id?: true
    startingPointId?: true
    finalPointId?: true
    peculiarity?: true
    departureTime?: true
    arrivalTime?: true
    type?: true
    weekDays?: true
  }

  export type GomelTransportCountAggregateInputType = {
    id?: true
    startingPointId?: true
    finalPointId?: true
    peculiarity?: true
    departureTime?: true
    arrivalTime?: true
    type?: true
    weekDays?: true
    _all?: true
  }

  export type GomelTransportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GomelTransport to aggregate.
     */
    where?: GomelTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GomelTransports to fetch.
     */
    orderBy?: GomelTransportOrderByWithRelationInput | GomelTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GomelTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GomelTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GomelTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GomelTransports
    **/
    _count?: true | GomelTransportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GomelTransportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GomelTransportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GomelTransportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GomelTransportMaxAggregateInputType
  }

  export type GetGomelTransportAggregateType<T extends GomelTransportAggregateArgs> = {
        [P in keyof T & keyof AggregateGomelTransport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGomelTransport[P]>
      : GetScalarType<T[P], AggregateGomelTransport[P]>
  }




  export type GomelTransportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GomelTransportWhereInput
    orderBy?: GomelTransportOrderByWithAggregationInput | GomelTransportOrderByWithAggregationInput[]
    by: GomelTransportScalarFieldEnum[] | GomelTransportScalarFieldEnum
    having?: GomelTransportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GomelTransportCountAggregateInputType | true
    _avg?: GomelTransportAvgAggregateInputType
    _sum?: GomelTransportSumAggregateInputType
    _min?: GomelTransportMinAggregateInputType
    _max?: GomelTransportMaxAggregateInputType
  }

  export type GomelTransportGroupByOutputType = {
    id: number
    startingPointId: number
    finalPointId: number
    peculiarity: string | null
    departureTime: string
    arrivalTime: string
    type: $Enums.Type
    weekDays: string
    _count: GomelTransportCountAggregateOutputType | null
    _avg: GomelTransportAvgAggregateOutputType | null
    _sum: GomelTransportSumAggregateOutputType | null
    _min: GomelTransportMinAggregateOutputType | null
    _max: GomelTransportMaxAggregateOutputType | null
  }

  type GetGomelTransportGroupByPayload<T extends GomelTransportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GomelTransportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GomelTransportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GomelTransportGroupByOutputType[P]>
            : GetScalarType<T[P], GomelTransportGroupByOutputType[P]>
        }
      >
    >


  export type GomelTransportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startingPointId?: boolean
    finalPointId?: boolean
    peculiarity?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    type?: boolean
    weekDays?: boolean
    finalPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
    startingPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gomelTransport"]>

  export type GomelTransportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startingPointId?: boolean
    finalPointId?: boolean
    peculiarity?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    type?: boolean
    weekDays?: boolean
    finalPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
    startingPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gomelTransport"]>

  export type GomelTransportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startingPointId?: boolean
    finalPointId?: boolean
    peculiarity?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    type?: boolean
    weekDays?: boolean
    finalPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
    startingPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gomelTransport"]>

  export type GomelTransportSelectScalar = {
    id?: boolean
    startingPointId?: boolean
    finalPointId?: boolean
    peculiarity?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    type?: boolean
    weekDays?: boolean
  }

  export type GomelTransportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startingPointId" | "finalPointId" | "peculiarity" | "departureTime" | "arrivalTime" | "type" | "weekDays", ExtArgs["result"]["gomelTransport"]>
  export type GomelTransportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finalPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
    startingPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
  }
  export type GomelTransportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finalPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
    startingPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
  }
  export type GomelTransportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finalPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
    startingPoint?: boolean | GomelStationsDefaultArgs<ExtArgs>
  }

  export type $GomelTransportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GomelTransport"
    objects: {
      finalPoint: Prisma.$GomelStationsPayload<ExtArgs>
      startingPoint: Prisma.$GomelStationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startingPointId: number
      finalPointId: number
      peculiarity: string | null
      departureTime: string
      arrivalTime: string
      type: $Enums.Type
      weekDays: string
    }, ExtArgs["result"]["gomelTransport"]>
    composites: {}
  }

  type GomelTransportGetPayload<S extends boolean | null | undefined | GomelTransportDefaultArgs> = $Result.GetResult<Prisma.$GomelTransportPayload, S>

  type GomelTransportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GomelTransportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GomelTransportCountAggregateInputType | true
    }

  export interface GomelTransportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GomelTransport'], meta: { name: 'GomelTransport' } }
    /**
     * Find zero or one GomelTransport that matches the filter.
     * @param {GomelTransportFindUniqueArgs} args - Arguments to find a GomelTransport
     * @example
     * // Get one GomelTransport
     * const gomelTransport = await prisma.gomelTransport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GomelTransportFindUniqueArgs>(args: SelectSubset<T, GomelTransportFindUniqueArgs<ExtArgs>>): Prisma__GomelTransportClient<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GomelTransport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GomelTransportFindUniqueOrThrowArgs} args - Arguments to find a GomelTransport
     * @example
     * // Get one GomelTransport
     * const gomelTransport = await prisma.gomelTransport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GomelTransportFindUniqueOrThrowArgs>(args: SelectSubset<T, GomelTransportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GomelTransportClient<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GomelTransport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelTransportFindFirstArgs} args - Arguments to find a GomelTransport
     * @example
     * // Get one GomelTransport
     * const gomelTransport = await prisma.gomelTransport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GomelTransportFindFirstArgs>(args?: SelectSubset<T, GomelTransportFindFirstArgs<ExtArgs>>): Prisma__GomelTransportClient<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GomelTransport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelTransportFindFirstOrThrowArgs} args - Arguments to find a GomelTransport
     * @example
     * // Get one GomelTransport
     * const gomelTransport = await prisma.gomelTransport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GomelTransportFindFirstOrThrowArgs>(args?: SelectSubset<T, GomelTransportFindFirstOrThrowArgs<ExtArgs>>): Prisma__GomelTransportClient<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GomelTransports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelTransportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GomelTransports
     * const gomelTransports = await prisma.gomelTransport.findMany()
     * 
     * // Get first 10 GomelTransports
     * const gomelTransports = await prisma.gomelTransport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gomelTransportWithIdOnly = await prisma.gomelTransport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GomelTransportFindManyArgs>(args?: SelectSubset<T, GomelTransportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GomelTransport.
     * @param {GomelTransportCreateArgs} args - Arguments to create a GomelTransport.
     * @example
     * // Create one GomelTransport
     * const GomelTransport = await prisma.gomelTransport.create({
     *   data: {
     *     // ... data to create a GomelTransport
     *   }
     * })
     * 
     */
    create<T extends GomelTransportCreateArgs>(args: SelectSubset<T, GomelTransportCreateArgs<ExtArgs>>): Prisma__GomelTransportClient<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GomelTransports.
     * @param {GomelTransportCreateManyArgs} args - Arguments to create many GomelTransports.
     * @example
     * // Create many GomelTransports
     * const gomelTransport = await prisma.gomelTransport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GomelTransportCreateManyArgs>(args?: SelectSubset<T, GomelTransportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GomelTransports and returns the data saved in the database.
     * @param {GomelTransportCreateManyAndReturnArgs} args - Arguments to create many GomelTransports.
     * @example
     * // Create many GomelTransports
     * const gomelTransport = await prisma.gomelTransport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GomelTransports and only return the `id`
     * const gomelTransportWithIdOnly = await prisma.gomelTransport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GomelTransportCreateManyAndReturnArgs>(args?: SelectSubset<T, GomelTransportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GomelTransport.
     * @param {GomelTransportDeleteArgs} args - Arguments to delete one GomelTransport.
     * @example
     * // Delete one GomelTransport
     * const GomelTransport = await prisma.gomelTransport.delete({
     *   where: {
     *     // ... filter to delete one GomelTransport
     *   }
     * })
     * 
     */
    delete<T extends GomelTransportDeleteArgs>(args: SelectSubset<T, GomelTransportDeleteArgs<ExtArgs>>): Prisma__GomelTransportClient<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GomelTransport.
     * @param {GomelTransportUpdateArgs} args - Arguments to update one GomelTransport.
     * @example
     * // Update one GomelTransport
     * const gomelTransport = await prisma.gomelTransport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GomelTransportUpdateArgs>(args: SelectSubset<T, GomelTransportUpdateArgs<ExtArgs>>): Prisma__GomelTransportClient<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GomelTransports.
     * @param {GomelTransportDeleteManyArgs} args - Arguments to filter GomelTransports to delete.
     * @example
     * // Delete a few GomelTransports
     * const { count } = await prisma.gomelTransport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GomelTransportDeleteManyArgs>(args?: SelectSubset<T, GomelTransportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GomelTransports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelTransportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GomelTransports
     * const gomelTransport = await prisma.gomelTransport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GomelTransportUpdateManyArgs>(args: SelectSubset<T, GomelTransportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GomelTransports and returns the data updated in the database.
     * @param {GomelTransportUpdateManyAndReturnArgs} args - Arguments to update many GomelTransports.
     * @example
     * // Update many GomelTransports
     * const gomelTransport = await prisma.gomelTransport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GomelTransports and only return the `id`
     * const gomelTransportWithIdOnly = await prisma.gomelTransport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GomelTransportUpdateManyAndReturnArgs>(args: SelectSubset<T, GomelTransportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GomelTransport.
     * @param {GomelTransportUpsertArgs} args - Arguments to update or create a GomelTransport.
     * @example
     * // Update or create a GomelTransport
     * const gomelTransport = await prisma.gomelTransport.upsert({
     *   create: {
     *     // ... data to create a GomelTransport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GomelTransport we want to update
     *   }
     * })
     */
    upsert<T extends GomelTransportUpsertArgs>(args: SelectSubset<T, GomelTransportUpsertArgs<ExtArgs>>): Prisma__GomelTransportClient<$Result.GetResult<Prisma.$GomelTransportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GomelTransports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelTransportCountArgs} args - Arguments to filter GomelTransports to count.
     * @example
     * // Count the number of GomelTransports
     * const count = await prisma.gomelTransport.count({
     *   where: {
     *     // ... the filter for the GomelTransports we want to count
     *   }
     * })
    **/
    count<T extends GomelTransportCountArgs>(
      args?: Subset<T, GomelTransportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GomelTransportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GomelTransport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelTransportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GomelTransportAggregateArgs>(args: Subset<T, GomelTransportAggregateArgs>): Prisma.PrismaPromise<GetGomelTransportAggregateType<T>>

    /**
     * Group by GomelTransport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GomelTransportGroupByArgs} args - Group by arguments.
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
      T extends GomelTransportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GomelTransportGroupByArgs['orderBy'] }
        : { orderBy?: GomelTransportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GomelTransportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGomelTransportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GomelTransport model
   */
  readonly fields: GomelTransportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GomelTransport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GomelTransportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    finalPoint<T extends GomelStationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GomelStationsDefaultArgs<ExtArgs>>): Prisma__GomelStationsClient<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    startingPoint<T extends GomelStationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GomelStationsDefaultArgs<ExtArgs>>): Prisma__GomelStationsClient<$Result.GetResult<Prisma.$GomelStationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GomelTransport model
   */
  interface GomelTransportFieldRefs {
    readonly id: FieldRef<"GomelTransport", 'Int'>
    readonly startingPointId: FieldRef<"GomelTransport", 'Int'>
    readonly finalPointId: FieldRef<"GomelTransport", 'Int'>
    readonly peculiarity: FieldRef<"GomelTransport", 'String'>
    readonly departureTime: FieldRef<"GomelTransport", 'String'>
    readonly arrivalTime: FieldRef<"GomelTransport", 'String'>
    readonly type: FieldRef<"GomelTransport", 'Type'>
    readonly weekDays: FieldRef<"GomelTransport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GomelTransport findUnique
   */
  export type GomelTransportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
    /**
     * Filter, which GomelTransport to fetch.
     */
    where: GomelTransportWhereUniqueInput
  }

  /**
   * GomelTransport findUniqueOrThrow
   */
  export type GomelTransportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
    /**
     * Filter, which GomelTransport to fetch.
     */
    where: GomelTransportWhereUniqueInput
  }

  /**
   * GomelTransport findFirst
   */
  export type GomelTransportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
    /**
     * Filter, which GomelTransport to fetch.
     */
    where?: GomelTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GomelTransports to fetch.
     */
    orderBy?: GomelTransportOrderByWithRelationInput | GomelTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GomelTransports.
     */
    cursor?: GomelTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GomelTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GomelTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GomelTransports.
     */
    distinct?: GomelTransportScalarFieldEnum | GomelTransportScalarFieldEnum[]
  }

  /**
   * GomelTransport findFirstOrThrow
   */
  export type GomelTransportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
    /**
     * Filter, which GomelTransport to fetch.
     */
    where?: GomelTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GomelTransports to fetch.
     */
    orderBy?: GomelTransportOrderByWithRelationInput | GomelTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GomelTransports.
     */
    cursor?: GomelTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GomelTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GomelTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GomelTransports.
     */
    distinct?: GomelTransportScalarFieldEnum | GomelTransportScalarFieldEnum[]
  }

  /**
   * GomelTransport findMany
   */
  export type GomelTransportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
    /**
     * Filter, which GomelTransports to fetch.
     */
    where?: GomelTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GomelTransports to fetch.
     */
    orderBy?: GomelTransportOrderByWithRelationInput | GomelTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GomelTransports.
     */
    cursor?: GomelTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GomelTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GomelTransports.
     */
    skip?: number
    distinct?: GomelTransportScalarFieldEnum | GomelTransportScalarFieldEnum[]
  }

  /**
   * GomelTransport create
   */
  export type GomelTransportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
    /**
     * The data needed to create a GomelTransport.
     */
    data: XOR<GomelTransportCreateInput, GomelTransportUncheckedCreateInput>
  }

  /**
   * GomelTransport createMany
   */
  export type GomelTransportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GomelTransports.
     */
    data: GomelTransportCreateManyInput | GomelTransportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GomelTransport createManyAndReturn
   */
  export type GomelTransportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * The data used to create many GomelTransports.
     */
    data: GomelTransportCreateManyInput | GomelTransportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GomelTransport update
   */
  export type GomelTransportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
    /**
     * The data needed to update a GomelTransport.
     */
    data: XOR<GomelTransportUpdateInput, GomelTransportUncheckedUpdateInput>
    /**
     * Choose, which GomelTransport to update.
     */
    where: GomelTransportWhereUniqueInput
  }

  /**
   * GomelTransport updateMany
   */
  export type GomelTransportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GomelTransports.
     */
    data: XOR<GomelTransportUpdateManyMutationInput, GomelTransportUncheckedUpdateManyInput>
    /**
     * Filter which GomelTransports to update
     */
    where?: GomelTransportWhereInput
    /**
     * Limit how many GomelTransports to update.
     */
    limit?: number
  }

  /**
   * GomelTransport updateManyAndReturn
   */
  export type GomelTransportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * The data used to update GomelTransports.
     */
    data: XOR<GomelTransportUpdateManyMutationInput, GomelTransportUncheckedUpdateManyInput>
    /**
     * Filter which GomelTransports to update
     */
    where?: GomelTransportWhereInput
    /**
     * Limit how many GomelTransports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GomelTransport upsert
   */
  export type GomelTransportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
    /**
     * The filter to search for the GomelTransport to update in case it exists.
     */
    where: GomelTransportWhereUniqueInput
    /**
     * In case the GomelTransport found by the `where` argument doesn't exist, create a new GomelTransport with this data.
     */
    create: XOR<GomelTransportCreateInput, GomelTransportUncheckedCreateInput>
    /**
     * In case the GomelTransport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GomelTransportUpdateInput, GomelTransportUncheckedUpdateInput>
  }

  /**
   * GomelTransport delete
   */
  export type GomelTransportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
    /**
     * Filter which GomelTransport to delete.
     */
    where: GomelTransportWhereUniqueInput
  }

  /**
   * GomelTransport deleteMany
   */
  export type GomelTransportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GomelTransports to delete
     */
    where?: GomelTransportWhereInput
    /**
     * Limit how many GomelTransports to delete.
     */
    limit?: number
  }

  /**
   * GomelTransport without action
   */
  export type GomelTransportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GomelTransport
     */
    select?: GomelTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GomelTransport
     */
    omit?: GomelTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GomelTransportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GomelStationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shortName: 'shortName'
  };

  export type GomelStationsScalarFieldEnum = (typeof GomelStationsScalarFieldEnum)[keyof typeof GomelStationsScalarFieldEnum]


  export const GomelTransportScalarFieldEnum: {
    id: 'id',
    startingPointId: 'startingPointId',
    finalPointId: 'finalPointId',
    peculiarity: 'peculiarity',
    departureTime: 'departureTime',
    arrivalTime: 'arrivalTime',
    type: 'type',
    weekDays: 'weekDays'
  };

  export type GomelTransportScalarFieldEnum = (typeof GomelTransportScalarFieldEnum)[keyof typeof GomelTransportScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GomelStationsWhereInput = {
    AND?: GomelStationsWhereInput | GomelStationsWhereInput[]
    OR?: GomelStationsWhereInput[]
    NOT?: GomelStationsWhereInput | GomelStationsWhereInput[]
    id?: IntFilter<"GomelStations"> | number
    name?: StringFilter<"GomelStations"> | string
    shortName?: StringNullableFilter<"GomelStations"> | string | null
    asFinalPoint?: GomelTransportListRelationFilter
    asStartingPoint?: GomelTransportListRelationFilter
  }

  export type GomelStationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrderInput | SortOrder
    asFinalPoint?: GomelTransportOrderByRelationAggregateInput
    asStartingPoint?: GomelTransportOrderByRelationAggregateInput
  }

  export type GomelStationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    shortName?: string
    AND?: GomelStationsWhereInput | GomelStationsWhereInput[]
    OR?: GomelStationsWhereInput[]
    NOT?: GomelStationsWhereInput | GomelStationsWhereInput[]
    asFinalPoint?: GomelTransportListRelationFilter
    asStartingPoint?: GomelTransportListRelationFilter
  }, "id" | "id" | "name" | "shortName">

  export type GomelStationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrderInput | SortOrder
    _count?: GomelStationsCountOrderByAggregateInput
    _avg?: GomelStationsAvgOrderByAggregateInput
    _max?: GomelStationsMaxOrderByAggregateInput
    _min?: GomelStationsMinOrderByAggregateInput
    _sum?: GomelStationsSumOrderByAggregateInput
  }

  export type GomelStationsScalarWhereWithAggregatesInput = {
    AND?: GomelStationsScalarWhereWithAggregatesInput | GomelStationsScalarWhereWithAggregatesInput[]
    OR?: GomelStationsScalarWhereWithAggregatesInput[]
    NOT?: GomelStationsScalarWhereWithAggregatesInput | GomelStationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GomelStations"> | number
    name?: StringWithAggregatesFilter<"GomelStations"> | string
    shortName?: StringNullableWithAggregatesFilter<"GomelStations"> | string | null
  }

  export type GomelTransportWhereInput = {
    AND?: GomelTransportWhereInput | GomelTransportWhereInput[]
    OR?: GomelTransportWhereInput[]
    NOT?: GomelTransportWhereInput | GomelTransportWhereInput[]
    id?: IntFilter<"GomelTransport"> | number
    startingPointId?: IntFilter<"GomelTransport"> | number
    finalPointId?: IntFilter<"GomelTransport"> | number
    peculiarity?: StringNullableFilter<"GomelTransport"> | string | null
    departureTime?: StringFilter<"GomelTransport"> | string
    arrivalTime?: StringFilter<"GomelTransport"> | string
    type?: EnumTypeFilter<"GomelTransport"> | $Enums.Type
    weekDays?: StringFilter<"GomelTransport"> | string
    finalPoint?: XOR<GomelStationsScalarRelationFilter, GomelStationsWhereInput>
    startingPoint?: XOR<GomelStationsScalarRelationFilter, GomelStationsWhereInput>
  }

  export type GomelTransportOrderByWithRelationInput = {
    id?: SortOrder
    startingPointId?: SortOrder
    finalPointId?: SortOrder
    peculiarity?: SortOrderInput | SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    type?: SortOrder
    weekDays?: SortOrder
    finalPoint?: GomelStationsOrderByWithRelationInput
    startingPoint?: GomelStationsOrderByWithRelationInput
  }

  export type GomelTransportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GomelTransportWhereInput | GomelTransportWhereInput[]
    OR?: GomelTransportWhereInput[]
    NOT?: GomelTransportWhereInput | GomelTransportWhereInput[]
    startingPointId?: IntFilter<"GomelTransport"> | number
    finalPointId?: IntFilter<"GomelTransport"> | number
    peculiarity?: StringNullableFilter<"GomelTransport"> | string | null
    departureTime?: StringFilter<"GomelTransport"> | string
    arrivalTime?: StringFilter<"GomelTransport"> | string
    type?: EnumTypeFilter<"GomelTransport"> | $Enums.Type
    weekDays?: StringFilter<"GomelTransport"> | string
    finalPoint?: XOR<GomelStationsScalarRelationFilter, GomelStationsWhereInput>
    startingPoint?: XOR<GomelStationsScalarRelationFilter, GomelStationsWhereInput>
  }, "id">

  export type GomelTransportOrderByWithAggregationInput = {
    id?: SortOrder
    startingPointId?: SortOrder
    finalPointId?: SortOrder
    peculiarity?: SortOrderInput | SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    type?: SortOrder
    weekDays?: SortOrder
    _count?: GomelTransportCountOrderByAggregateInput
    _avg?: GomelTransportAvgOrderByAggregateInput
    _max?: GomelTransportMaxOrderByAggregateInput
    _min?: GomelTransportMinOrderByAggregateInput
    _sum?: GomelTransportSumOrderByAggregateInput
  }

  export type GomelTransportScalarWhereWithAggregatesInput = {
    AND?: GomelTransportScalarWhereWithAggregatesInput | GomelTransportScalarWhereWithAggregatesInput[]
    OR?: GomelTransportScalarWhereWithAggregatesInput[]
    NOT?: GomelTransportScalarWhereWithAggregatesInput | GomelTransportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GomelTransport"> | number
    startingPointId?: IntWithAggregatesFilter<"GomelTransport"> | number
    finalPointId?: IntWithAggregatesFilter<"GomelTransport"> | number
    peculiarity?: StringNullableWithAggregatesFilter<"GomelTransport"> | string | null
    departureTime?: StringWithAggregatesFilter<"GomelTransport"> | string
    arrivalTime?: StringWithAggregatesFilter<"GomelTransport"> | string
    type?: EnumTypeWithAggregatesFilter<"GomelTransport"> | $Enums.Type
    weekDays?: StringWithAggregatesFilter<"GomelTransport"> | string
  }

  export type GomelStationsCreateInput = {
    name: string
    shortName?: string | null
    asFinalPoint?: GomelTransportCreateNestedManyWithoutFinalPointInput
    asStartingPoint?: GomelTransportCreateNestedManyWithoutStartingPointInput
  }

  export type GomelStationsUncheckedCreateInput = {
    id?: number
    name: string
    shortName?: string | null
    asFinalPoint?: GomelTransportUncheckedCreateNestedManyWithoutFinalPointInput
    asStartingPoint?: GomelTransportUncheckedCreateNestedManyWithoutStartingPointInput
  }

  export type GomelStationsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    asFinalPoint?: GomelTransportUpdateManyWithoutFinalPointNestedInput
    asStartingPoint?: GomelTransportUpdateManyWithoutStartingPointNestedInput
  }

  export type GomelStationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    asFinalPoint?: GomelTransportUncheckedUpdateManyWithoutFinalPointNestedInput
    asStartingPoint?: GomelTransportUncheckedUpdateManyWithoutStartingPointNestedInput
  }

  export type GomelStationsCreateManyInput = {
    id?: number
    name: string
    shortName?: string | null
  }

  export type GomelStationsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GomelStationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GomelTransportCreateInput = {
    peculiarity?: string | null
    departureTime: string
    arrivalTime: string
    type: $Enums.Type
    weekDays: string
    finalPoint: GomelStationsCreateNestedOneWithoutAsFinalPointInput
    startingPoint: GomelStationsCreateNestedOneWithoutAsStartingPointInput
  }

  export type GomelTransportUncheckedCreateInput = {
    id?: number
    startingPointId: number
    finalPointId: number
    peculiarity?: string | null
    departureTime: string
    arrivalTime: string
    type: $Enums.Type
    weekDays: string
  }

  export type GomelTransportUpdateInput = {
    peculiarity?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: StringFieldUpdateOperationsInput | string
    arrivalTime?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    weekDays?: StringFieldUpdateOperationsInput | string
    finalPoint?: GomelStationsUpdateOneRequiredWithoutAsFinalPointNestedInput
    startingPoint?: GomelStationsUpdateOneRequiredWithoutAsStartingPointNestedInput
  }

  export type GomelTransportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startingPointId?: IntFieldUpdateOperationsInput | number
    finalPointId?: IntFieldUpdateOperationsInput | number
    peculiarity?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: StringFieldUpdateOperationsInput | string
    arrivalTime?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    weekDays?: StringFieldUpdateOperationsInput | string
  }

  export type GomelTransportCreateManyInput = {
    id?: number
    startingPointId: number
    finalPointId: number
    peculiarity?: string | null
    departureTime: string
    arrivalTime: string
    type: $Enums.Type
    weekDays: string
  }

  export type GomelTransportUpdateManyMutationInput = {
    peculiarity?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: StringFieldUpdateOperationsInput | string
    arrivalTime?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    weekDays?: StringFieldUpdateOperationsInput | string
  }

  export type GomelTransportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startingPointId?: IntFieldUpdateOperationsInput | number
    finalPointId?: IntFieldUpdateOperationsInput | number
    peculiarity?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: StringFieldUpdateOperationsInput | string
    arrivalTime?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    weekDays?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GomelTransportListRelationFilter = {
    every?: GomelTransportWhereInput
    some?: GomelTransportWhereInput
    none?: GomelTransportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GomelTransportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GomelStationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
  }

  export type GomelStationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GomelStationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
  }

  export type GomelStationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
  }

  export type GomelStationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type GomelStationsScalarRelationFilter = {
    is?: GomelStationsWhereInput
    isNot?: GomelStationsWhereInput
  }

  export type GomelTransportCountOrderByAggregateInput = {
    id?: SortOrder
    startingPointId?: SortOrder
    finalPointId?: SortOrder
    peculiarity?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    type?: SortOrder
    weekDays?: SortOrder
  }

  export type GomelTransportAvgOrderByAggregateInput = {
    id?: SortOrder
    startingPointId?: SortOrder
    finalPointId?: SortOrder
  }

  export type GomelTransportMaxOrderByAggregateInput = {
    id?: SortOrder
    startingPointId?: SortOrder
    finalPointId?: SortOrder
    peculiarity?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    type?: SortOrder
    weekDays?: SortOrder
  }

  export type GomelTransportMinOrderByAggregateInput = {
    id?: SortOrder
    startingPointId?: SortOrder
    finalPointId?: SortOrder
    peculiarity?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    type?: SortOrder
    weekDays?: SortOrder
  }

  export type GomelTransportSumOrderByAggregateInput = {
    id?: SortOrder
    startingPointId?: SortOrder
    finalPointId?: SortOrder
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type GomelTransportCreateNestedManyWithoutFinalPointInput = {
    create?: XOR<GomelTransportCreateWithoutFinalPointInput, GomelTransportUncheckedCreateWithoutFinalPointInput> | GomelTransportCreateWithoutFinalPointInput[] | GomelTransportUncheckedCreateWithoutFinalPointInput[]
    connectOrCreate?: GomelTransportCreateOrConnectWithoutFinalPointInput | GomelTransportCreateOrConnectWithoutFinalPointInput[]
    createMany?: GomelTransportCreateManyFinalPointInputEnvelope
    connect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
  }

  export type GomelTransportCreateNestedManyWithoutStartingPointInput = {
    create?: XOR<GomelTransportCreateWithoutStartingPointInput, GomelTransportUncheckedCreateWithoutStartingPointInput> | GomelTransportCreateWithoutStartingPointInput[] | GomelTransportUncheckedCreateWithoutStartingPointInput[]
    connectOrCreate?: GomelTransportCreateOrConnectWithoutStartingPointInput | GomelTransportCreateOrConnectWithoutStartingPointInput[]
    createMany?: GomelTransportCreateManyStartingPointInputEnvelope
    connect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
  }

  export type GomelTransportUncheckedCreateNestedManyWithoutFinalPointInput = {
    create?: XOR<GomelTransportCreateWithoutFinalPointInput, GomelTransportUncheckedCreateWithoutFinalPointInput> | GomelTransportCreateWithoutFinalPointInput[] | GomelTransportUncheckedCreateWithoutFinalPointInput[]
    connectOrCreate?: GomelTransportCreateOrConnectWithoutFinalPointInput | GomelTransportCreateOrConnectWithoutFinalPointInput[]
    createMany?: GomelTransportCreateManyFinalPointInputEnvelope
    connect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
  }

  export type GomelTransportUncheckedCreateNestedManyWithoutStartingPointInput = {
    create?: XOR<GomelTransportCreateWithoutStartingPointInput, GomelTransportUncheckedCreateWithoutStartingPointInput> | GomelTransportCreateWithoutStartingPointInput[] | GomelTransportUncheckedCreateWithoutStartingPointInput[]
    connectOrCreate?: GomelTransportCreateOrConnectWithoutStartingPointInput | GomelTransportCreateOrConnectWithoutStartingPointInput[]
    createMany?: GomelTransportCreateManyStartingPointInputEnvelope
    connect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GomelTransportUpdateManyWithoutFinalPointNestedInput = {
    create?: XOR<GomelTransportCreateWithoutFinalPointInput, GomelTransportUncheckedCreateWithoutFinalPointInput> | GomelTransportCreateWithoutFinalPointInput[] | GomelTransportUncheckedCreateWithoutFinalPointInput[]
    connectOrCreate?: GomelTransportCreateOrConnectWithoutFinalPointInput | GomelTransportCreateOrConnectWithoutFinalPointInput[]
    upsert?: GomelTransportUpsertWithWhereUniqueWithoutFinalPointInput | GomelTransportUpsertWithWhereUniqueWithoutFinalPointInput[]
    createMany?: GomelTransportCreateManyFinalPointInputEnvelope
    set?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    disconnect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    delete?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    connect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    update?: GomelTransportUpdateWithWhereUniqueWithoutFinalPointInput | GomelTransportUpdateWithWhereUniqueWithoutFinalPointInput[]
    updateMany?: GomelTransportUpdateManyWithWhereWithoutFinalPointInput | GomelTransportUpdateManyWithWhereWithoutFinalPointInput[]
    deleteMany?: GomelTransportScalarWhereInput | GomelTransportScalarWhereInput[]
  }

  export type GomelTransportUpdateManyWithoutStartingPointNestedInput = {
    create?: XOR<GomelTransportCreateWithoutStartingPointInput, GomelTransportUncheckedCreateWithoutStartingPointInput> | GomelTransportCreateWithoutStartingPointInput[] | GomelTransportUncheckedCreateWithoutStartingPointInput[]
    connectOrCreate?: GomelTransportCreateOrConnectWithoutStartingPointInput | GomelTransportCreateOrConnectWithoutStartingPointInput[]
    upsert?: GomelTransportUpsertWithWhereUniqueWithoutStartingPointInput | GomelTransportUpsertWithWhereUniqueWithoutStartingPointInput[]
    createMany?: GomelTransportCreateManyStartingPointInputEnvelope
    set?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    disconnect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    delete?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    connect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    update?: GomelTransportUpdateWithWhereUniqueWithoutStartingPointInput | GomelTransportUpdateWithWhereUniqueWithoutStartingPointInput[]
    updateMany?: GomelTransportUpdateManyWithWhereWithoutStartingPointInput | GomelTransportUpdateManyWithWhereWithoutStartingPointInput[]
    deleteMany?: GomelTransportScalarWhereInput | GomelTransportScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GomelTransportUncheckedUpdateManyWithoutFinalPointNestedInput = {
    create?: XOR<GomelTransportCreateWithoutFinalPointInput, GomelTransportUncheckedCreateWithoutFinalPointInput> | GomelTransportCreateWithoutFinalPointInput[] | GomelTransportUncheckedCreateWithoutFinalPointInput[]
    connectOrCreate?: GomelTransportCreateOrConnectWithoutFinalPointInput | GomelTransportCreateOrConnectWithoutFinalPointInput[]
    upsert?: GomelTransportUpsertWithWhereUniqueWithoutFinalPointInput | GomelTransportUpsertWithWhereUniqueWithoutFinalPointInput[]
    createMany?: GomelTransportCreateManyFinalPointInputEnvelope
    set?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    disconnect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    delete?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    connect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    update?: GomelTransportUpdateWithWhereUniqueWithoutFinalPointInput | GomelTransportUpdateWithWhereUniqueWithoutFinalPointInput[]
    updateMany?: GomelTransportUpdateManyWithWhereWithoutFinalPointInput | GomelTransportUpdateManyWithWhereWithoutFinalPointInput[]
    deleteMany?: GomelTransportScalarWhereInput | GomelTransportScalarWhereInput[]
  }

  export type GomelTransportUncheckedUpdateManyWithoutStartingPointNestedInput = {
    create?: XOR<GomelTransportCreateWithoutStartingPointInput, GomelTransportUncheckedCreateWithoutStartingPointInput> | GomelTransportCreateWithoutStartingPointInput[] | GomelTransportUncheckedCreateWithoutStartingPointInput[]
    connectOrCreate?: GomelTransportCreateOrConnectWithoutStartingPointInput | GomelTransportCreateOrConnectWithoutStartingPointInput[]
    upsert?: GomelTransportUpsertWithWhereUniqueWithoutStartingPointInput | GomelTransportUpsertWithWhereUniqueWithoutStartingPointInput[]
    createMany?: GomelTransportCreateManyStartingPointInputEnvelope
    set?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    disconnect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    delete?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    connect?: GomelTransportWhereUniqueInput | GomelTransportWhereUniqueInput[]
    update?: GomelTransportUpdateWithWhereUniqueWithoutStartingPointInput | GomelTransportUpdateWithWhereUniqueWithoutStartingPointInput[]
    updateMany?: GomelTransportUpdateManyWithWhereWithoutStartingPointInput | GomelTransportUpdateManyWithWhereWithoutStartingPointInput[]
    deleteMany?: GomelTransportScalarWhereInput | GomelTransportScalarWhereInput[]
  }

  export type GomelStationsCreateNestedOneWithoutAsFinalPointInput = {
    create?: XOR<GomelStationsCreateWithoutAsFinalPointInput, GomelStationsUncheckedCreateWithoutAsFinalPointInput>
    connectOrCreate?: GomelStationsCreateOrConnectWithoutAsFinalPointInput
    connect?: GomelStationsWhereUniqueInput
  }

  export type GomelStationsCreateNestedOneWithoutAsStartingPointInput = {
    create?: XOR<GomelStationsCreateWithoutAsStartingPointInput, GomelStationsUncheckedCreateWithoutAsStartingPointInput>
    connectOrCreate?: GomelStationsCreateOrConnectWithoutAsStartingPointInput
    connect?: GomelStationsWhereUniqueInput
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type GomelStationsUpdateOneRequiredWithoutAsFinalPointNestedInput = {
    create?: XOR<GomelStationsCreateWithoutAsFinalPointInput, GomelStationsUncheckedCreateWithoutAsFinalPointInput>
    connectOrCreate?: GomelStationsCreateOrConnectWithoutAsFinalPointInput
    upsert?: GomelStationsUpsertWithoutAsFinalPointInput
    connect?: GomelStationsWhereUniqueInput
    update?: XOR<XOR<GomelStationsUpdateToOneWithWhereWithoutAsFinalPointInput, GomelStationsUpdateWithoutAsFinalPointInput>, GomelStationsUncheckedUpdateWithoutAsFinalPointInput>
  }

  export type GomelStationsUpdateOneRequiredWithoutAsStartingPointNestedInput = {
    create?: XOR<GomelStationsCreateWithoutAsStartingPointInput, GomelStationsUncheckedCreateWithoutAsStartingPointInput>
    connectOrCreate?: GomelStationsCreateOrConnectWithoutAsStartingPointInput
    upsert?: GomelStationsUpsertWithoutAsStartingPointInput
    connect?: GomelStationsWhereUniqueInput
    update?: XOR<XOR<GomelStationsUpdateToOneWithWhereWithoutAsStartingPointInput, GomelStationsUpdateWithoutAsStartingPointInput>, GomelStationsUncheckedUpdateWithoutAsStartingPointInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type GomelTransportCreateWithoutFinalPointInput = {
    peculiarity?: string | null
    departureTime: string
    arrivalTime: string
    type: $Enums.Type
    weekDays: string
    startingPoint: GomelStationsCreateNestedOneWithoutAsStartingPointInput
  }

  export type GomelTransportUncheckedCreateWithoutFinalPointInput = {
    id?: number
    startingPointId: number
    peculiarity?: string | null
    departureTime: string
    arrivalTime: string
    type: $Enums.Type
    weekDays: string
  }

  export type GomelTransportCreateOrConnectWithoutFinalPointInput = {
    where: GomelTransportWhereUniqueInput
    create: XOR<GomelTransportCreateWithoutFinalPointInput, GomelTransportUncheckedCreateWithoutFinalPointInput>
  }

  export type GomelTransportCreateManyFinalPointInputEnvelope = {
    data: GomelTransportCreateManyFinalPointInput | GomelTransportCreateManyFinalPointInput[]
    skipDuplicates?: boolean
  }

  export type GomelTransportCreateWithoutStartingPointInput = {
    peculiarity?: string | null
    departureTime: string
    arrivalTime: string
    type: $Enums.Type
    weekDays: string
    finalPoint: GomelStationsCreateNestedOneWithoutAsFinalPointInput
  }

  export type GomelTransportUncheckedCreateWithoutStartingPointInput = {
    id?: number
    finalPointId: number
    peculiarity?: string | null
    departureTime: string
    arrivalTime: string
    type: $Enums.Type
    weekDays: string
  }

  export type GomelTransportCreateOrConnectWithoutStartingPointInput = {
    where: GomelTransportWhereUniqueInput
    create: XOR<GomelTransportCreateWithoutStartingPointInput, GomelTransportUncheckedCreateWithoutStartingPointInput>
  }

  export type GomelTransportCreateManyStartingPointInputEnvelope = {
    data: GomelTransportCreateManyStartingPointInput | GomelTransportCreateManyStartingPointInput[]
    skipDuplicates?: boolean
  }

  export type GomelTransportUpsertWithWhereUniqueWithoutFinalPointInput = {
    where: GomelTransportWhereUniqueInput
    update: XOR<GomelTransportUpdateWithoutFinalPointInput, GomelTransportUncheckedUpdateWithoutFinalPointInput>
    create: XOR<GomelTransportCreateWithoutFinalPointInput, GomelTransportUncheckedCreateWithoutFinalPointInput>
  }

  export type GomelTransportUpdateWithWhereUniqueWithoutFinalPointInput = {
    where: GomelTransportWhereUniqueInput
    data: XOR<GomelTransportUpdateWithoutFinalPointInput, GomelTransportUncheckedUpdateWithoutFinalPointInput>
  }

  export type GomelTransportUpdateManyWithWhereWithoutFinalPointInput = {
    where: GomelTransportScalarWhereInput
    data: XOR<GomelTransportUpdateManyMutationInput, GomelTransportUncheckedUpdateManyWithoutFinalPointInput>
  }

  export type GomelTransportScalarWhereInput = {
    AND?: GomelTransportScalarWhereInput | GomelTransportScalarWhereInput[]
    OR?: GomelTransportScalarWhereInput[]
    NOT?: GomelTransportScalarWhereInput | GomelTransportScalarWhereInput[]
    id?: IntFilter<"GomelTransport"> | number
    startingPointId?: IntFilter<"GomelTransport"> | number
    finalPointId?: IntFilter<"GomelTransport"> | number
    peculiarity?: StringNullableFilter<"GomelTransport"> | string | null
    departureTime?: StringFilter<"GomelTransport"> | string
    arrivalTime?: StringFilter<"GomelTransport"> | string
    type?: EnumTypeFilter<"GomelTransport"> | $Enums.Type
    weekDays?: StringFilter<"GomelTransport"> | string
  }

  export type GomelTransportUpsertWithWhereUniqueWithoutStartingPointInput = {
    where: GomelTransportWhereUniqueInput
    update: XOR<GomelTransportUpdateWithoutStartingPointInput, GomelTransportUncheckedUpdateWithoutStartingPointInput>
    create: XOR<GomelTransportCreateWithoutStartingPointInput, GomelTransportUncheckedCreateWithoutStartingPointInput>
  }

  export type GomelTransportUpdateWithWhereUniqueWithoutStartingPointInput = {
    where: GomelTransportWhereUniqueInput
    data: XOR<GomelTransportUpdateWithoutStartingPointInput, GomelTransportUncheckedUpdateWithoutStartingPointInput>
  }

  export type GomelTransportUpdateManyWithWhereWithoutStartingPointInput = {
    where: GomelTransportScalarWhereInput
    data: XOR<GomelTransportUpdateManyMutationInput, GomelTransportUncheckedUpdateManyWithoutStartingPointInput>
  }

  export type GomelStationsCreateWithoutAsFinalPointInput = {
    name: string
    shortName?: string | null
    asStartingPoint?: GomelTransportCreateNestedManyWithoutStartingPointInput
  }

  export type GomelStationsUncheckedCreateWithoutAsFinalPointInput = {
    id?: number
    name: string
    shortName?: string | null
    asStartingPoint?: GomelTransportUncheckedCreateNestedManyWithoutStartingPointInput
  }

  export type GomelStationsCreateOrConnectWithoutAsFinalPointInput = {
    where: GomelStationsWhereUniqueInput
    create: XOR<GomelStationsCreateWithoutAsFinalPointInput, GomelStationsUncheckedCreateWithoutAsFinalPointInput>
  }

  export type GomelStationsCreateWithoutAsStartingPointInput = {
    name: string
    shortName?: string | null
    asFinalPoint?: GomelTransportCreateNestedManyWithoutFinalPointInput
  }

  export type GomelStationsUncheckedCreateWithoutAsStartingPointInput = {
    id?: number
    name: string
    shortName?: string | null
    asFinalPoint?: GomelTransportUncheckedCreateNestedManyWithoutFinalPointInput
  }

  export type GomelStationsCreateOrConnectWithoutAsStartingPointInput = {
    where: GomelStationsWhereUniqueInput
    create: XOR<GomelStationsCreateWithoutAsStartingPointInput, GomelStationsUncheckedCreateWithoutAsStartingPointInput>
  }

  export type GomelStationsUpsertWithoutAsFinalPointInput = {
    update: XOR<GomelStationsUpdateWithoutAsFinalPointInput, GomelStationsUncheckedUpdateWithoutAsFinalPointInput>
    create: XOR<GomelStationsCreateWithoutAsFinalPointInput, GomelStationsUncheckedCreateWithoutAsFinalPointInput>
    where?: GomelStationsWhereInput
  }

  export type GomelStationsUpdateToOneWithWhereWithoutAsFinalPointInput = {
    where?: GomelStationsWhereInput
    data: XOR<GomelStationsUpdateWithoutAsFinalPointInput, GomelStationsUncheckedUpdateWithoutAsFinalPointInput>
  }

  export type GomelStationsUpdateWithoutAsFinalPointInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    asStartingPoint?: GomelTransportUpdateManyWithoutStartingPointNestedInput
  }

  export type GomelStationsUncheckedUpdateWithoutAsFinalPointInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    asStartingPoint?: GomelTransportUncheckedUpdateManyWithoutStartingPointNestedInput
  }

  export type GomelStationsUpsertWithoutAsStartingPointInput = {
    update: XOR<GomelStationsUpdateWithoutAsStartingPointInput, GomelStationsUncheckedUpdateWithoutAsStartingPointInput>
    create: XOR<GomelStationsCreateWithoutAsStartingPointInput, GomelStationsUncheckedCreateWithoutAsStartingPointInput>
    where?: GomelStationsWhereInput
  }

  export type GomelStationsUpdateToOneWithWhereWithoutAsStartingPointInput = {
    where?: GomelStationsWhereInput
    data: XOR<GomelStationsUpdateWithoutAsStartingPointInput, GomelStationsUncheckedUpdateWithoutAsStartingPointInput>
  }

  export type GomelStationsUpdateWithoutAsStartingPointInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    asFinalPoint?: GomelTransportUpdateManyWithoutFinalPointNestedInput
  }

  export type GomelStationsUncheckedUpdateWithoutAsStartingPointInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    asFinalPoint?: GomelTransportUncheckedUpdateManyWithoutFinalPointNestedInput
  }

  export type GomelTransportCreateManyFinalPointInput = {
    id?: number
    startingPointId: number
    peculiarity?: string | null
    departureTime: string
    arrivalTime: string
    type: $Enums.Type
    weekDays: string
  }

  export type GomelTransportCreateManyStartingPointInput = {
    id?: number
    finalPointId: number
    peculiarity?: string | null
    departureTime: string
    arrivalTime: string
    type: $Enums.Type
    weekDays: string
  }

  export type GomelTransportUpdateWithoutFinalPointInput = {
    peculiarity?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: StringFieldUpdateOperationsInput | string
    arrivalTime?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    weekDays?: StringFieldUpdateOperationsInput | string
    startingPoint?: GomelStationsUpdateOneRequiredWithoutAsStartingPointNestedInput
  }

  export type GomelTransportUncheckedUpdateWithoutFinalPointInput = {
    id?: IntFieldUpdateOperationsInput | number
    startingPointId?: IntFieldUpdateOperationsInput | number
    peculiarity?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: StringFieldUpdateOperationsInput | string
    arrivalTime?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    weekDays?: StringFieldUpdateOperationsInput | string
  }

  export type GomelTransportUncheckedUpdateManyWithoutFinalPointInput = {
    id?: IntFieldUpdateOperationsInput | number
    startingPointId?: IntFieldUpdateOperationsInput | number
    peculiarity?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: StringFieldUpdateOperationsInput | string
    arrivalTime?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    weekDays?: StringFieldUpdateOperationsInput | string
  }

  export type GomelTransportUpdateWithoutStartingPointInput = {
    peculiarity?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: StringFieldUpdateOperationsInput | string
    arrivalTime?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    weekDays?: StringFieldUpdateOperationsInput | string
    finalPoint?: GomelStationsUpdateOneRequiredWithoutAsFinalPointNestedInput
  }

  export type GomelTransportUncheckedUpdateWithoutStartingPointInput = {
    id?: IntFieldUpdateOperationsInput | number
    finalPointId?: IntFieldUpdateOperationsInput | number
    peculiarity?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: StringFieldUpdateOperationsInput | string
    arrivalTime?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    weekDays?: StringFieldUpdateOperationsInput | string
  }

  export type GomelTransportUncheckedUpdateManyWithoutStartingPointInput = {
    id?: IntFieldUpdateOperationsInput | number
    finalPointId?: IntFieldUpdateOperationsInput | number
    peculiarity?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: StringFieldUpdateOperationsInput | string
    arrivalTime?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    weekDays?: StringFieldUpdateOperationsInput | string
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