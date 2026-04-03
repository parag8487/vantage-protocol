
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Score
 * 
 */
export type Score = $Result.DefaultSelection<Prisma.$ScorePayload>
/**
 * Model Charity
 * 
 */
export type Charity = $Result.DefaultSelection<Prisma.$CharityPayload>
/**
 * Model DrawResult
 * 
 */
export type DrawResult = $Result.DefaultSelection<Prisma.$DrawResultPayload>
/**
 * Model DrawParticipant
 * 
 */
export type DrawParticipant = $Result.DefaultSelection<Prisma.$DrawParticipantPayload>
/**
 * Model Winner
 * 
 */
export type Winner = $Result.DefaultSelection<Prisma.$WinnerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SubStatus: {
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELED: 'CANCELED'
};

export type SubStatus = (typeof SubStatus)[keyof typeof SubStatus]


export const DrawState: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

export type DrawState = (typeof DrawState)[keyof typeof DrawState]


export const PayoutStatus: {
  PENDING_PROOF: 'PENDING_PROOF',
  PENDING_ADMIN_REVIEW: 'PENDING_ADMIN_REVIEW',
  APPROVED_PENDING_PAYMENT: 'APPROVED_PENDING_PAYMENT',
  PAID: 'PAID',
  REJECTED: 'REJECTED'
};

export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SubStatus = $Enums.SubStatus

export const SubStatus: typeof $Enums.SubStatus

export type DrawState = $Enums.DrawState

export const DrawState: typeof $Enums.DrawState

export type PayoutStatus = $Enums.PayoutStatus

export const PayoutStatus: typeof $Enums.PayoutStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.score`: Exposes CRUD operations for the **Score** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scores
    * const scores = await prisma.score.findMany()
    * ```
    */
  get score(): Prisma.ScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.charity`: Exposes CRUD operations for the **Charity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Charities
    * const charities = await prisma.charity.findMany()
    * ```
    */
  get charity(): Prisma.CharityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drawResult`: Exposes CRUD operations for the **DrawResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrawResults
    * const drawResults = await prisma.drawResult.findMany()
    * ```
    */
  get drawResult(): Prisma.DrawResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drawParticipant`: Exposes CRUD operations for the **DrawParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrawParticipants
    * const drawParticipants = await prisma.drawParticipant.findMany()
    * ```
    */
  get drawParticipant(): Prisma.DrawParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.winner`: Exposes CRUD operations for the **Winner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Winners
    * const winners = await prisma.winner.findMany()
    * ```
    */
  get winner(): Prisma.WinnerDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Profile: 'Profile',
    Score: 'Score',
    Charity: 'Charity',
    DrawResult: 'DrawResult',
    DrawParticipant: 'DrawParticipant',
    Winner: 'Winner'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "score" | "charity" | "drawResult" | "drawParticipant" | "winner"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Score: {
        payload: Prisma.$ScorePayload<ExtArgs>
        fields: Prisma.ScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findFirst: {
            args: Prisma.ScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findMany: {
            args: Prisma.ScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          create: {
            args: Prisma.ScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          createMany: {
            args: Prisma.ScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          delete: {
            args: Prisma.ScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          update: {
            args: Prisma.ScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          deleteMany: {
            args: Prisma.ScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          upsert: {
            args: Prisma.ScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          aggregate: {
            args: Prisma.ScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScore>
          }
          groupBy: {
            args: Prisma.ScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreCountAggregateOutputType> | number
          }
        }
      }
      Charity: {
        payload: Prisma.$CharityPayload<ExtArgs>
        fields: Prisma.CharityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          findFirst: {
            args: Prisma.CharityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          findMany: {
            args: Prisma.CharityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>[]
          }
          create: {
            args: Prisma.CharityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          createMany: {
            args: Prisma.CharityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>[]
          }
          delete: {
            args: Prisma.CharityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          update: {
            args: Prisma.CharityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          deleteMany: {
            args: Prisma.CharityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>[]
          }
          upsert: {
            args: Prisma.CharityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          aggregate: {
            args: Prisma.CharityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharity>
          }
          groupBy: {
            args: Prisma.CharityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharityCountArgs<ExtArgs>
            result: $Utils.Optional<CharityCountAggregateOutputType> | number
          }
        }
      }
      DrawResult: {
        payload: Prisma.$DrawResultPayload<ExtArgs>
        fields: Prisma.DrawResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrawResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrawResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          findFirst: {
            args: Prisma.DrawResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrawResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          findMany: {
            args: Prisma.DrawResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>[]
          }
          create: {
            args: Prisma.DrawResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          createMany: {
            args: Prisma.DrawResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrawResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>[]
          }
          delete: {
            args: Prisma.DrawResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          update: {
            args: Prisma.DrawResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          deleteMany: {
            args: Prisma.DrawResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrawResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrawResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>[]
          }
          upsert: {
            args: Prisma.DrawResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          aggregate: {
            args: Prisma.DrawResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrawResult>
          }
          groupBy: {
            args: Prisma.DrawResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrawResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrawResultCountArgs<ExtArgs>
            result: $Utils.Optional<DrawResultCountAggregateOutputType> | number
          }
        }
      }
      DrawParticipant: {
        payload: Prisma.$DrawParticipantPayload<ExtArgs>
        fields: Prisma.DrawParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrawParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrawParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawParticipantPayload>
          }
          findFirst: {
            args: Prisma.DrawParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrawParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawParticipantPayload>
          }
          findMany: {
            args: Prisma.DrawParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawParticipantPayload>[]
          }
          create: {
            args: Prisma.DrawParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawParticipantPayload>
          }
          createMany: {
            args: Prisma.DrawParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrawParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawParticipantPayload>[]
          }
          delete: {
            args: Prisma.DrawParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawParticipantPayload>
          }
          update: {
            args: Prisma.DrawParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawParticipantPayload>
          }
          deleteMany: {
            args: Prisma.DrawParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrawParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrawParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawParticipantPayload>[]
          }
          upsert: {
            args: Prisma.DrawParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawParticipantPayload>
          }
          aggregate: {
            args: Prisma.DrawParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrawParticipant>
          }
          groupBy: {
            args: Prisma.DrawParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrawParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrawParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<DrawParticipantCountAggregateOutputType> | number
          }
        }
      }
      Winner: {
        payload: Prisma.$WinnerPayload<ExtArgs>
        fields: Prisma.WinnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WinnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WinnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          findFirst: {
            args: Prisma.WinnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WinnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          findMany: {
            args: Prisma.WinnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          create: {
            args: Prisma.WinnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          createMany: {
            args: Prisma.WinnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WinnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          delete: {
            args: Prisma.WinnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          update: {
            args: Prisma.WinnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          deleteMany: {
            args: Prisma.WinnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WinnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WinnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          upsert: {
            args: Prisma.WinnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          aggregate: {
            args: Prisma.WinnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWinner>
          }
          groupBy: {
            args: Prisma.WinnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WinnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WinnerCountArgs<ExtArgs>
            result: $Utils.Optional<WinnerCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    score?: ScoreOmit
    charity?: CharityOmit
    drawResult?: DrawResultOmit
    drawParticipant?: DrawParticipantOmit
    winner?: WinnerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    scores: number
    drawParticipations: number
    winnings: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | ProfileCountOutputTypeCountScoresArgs
    drawParticipations?: boolean | ProfileCountOutputTypeCountDrawParticipationsArgs
    winnings?: boolean | ProfileCountOutputTypeCountWinningsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountDrawParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawParticipantWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountWinningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
  }


  /**
   * Count Type CharityCountOutputType
   */

  export type CharityCountOutputType = {
    supporters: number
  }

  export type CharityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supporters?: boolean | CharityCountOutputTypeCountSupportersArgs
  }

  // Custom InputTypes
  /**
   * CharityCountOutputType without action
   */
  export type CharityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityCountOutputType
     */
    select?: CharityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharityCountOutputType without action
   */
  export type CharityCountOutputTypeCountSupportersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }


  /**
   * Count Type DrawResultCountOutputType
   */

  export type DrawResultCountOutputType = {
    winners: number
    participants: number
  }

  export type DrawResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winners?: boolean | DrawResultCountOutputTypeCountWinnersArgs
    participants?: boolean | DrawResultCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * DrawResultCountOutputType without action
   */
  export type DrawResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResultCountOutputType
     */
    select?: DrawResultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrawResultCountOutputType without action
   */
  export type DrawResultCountOutputTypeCountWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
  }

  /**
   * DrawResultCountOutputType without action
   */
  export type DrawResultCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    charityPercentage: number | null
  }

  export type ProfileSumAggregateOutputType = {
    charityPercentage: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    subscriptionStatus: $Enums.SubStatus | null
    stripeCustomerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    selectedCharityId: string | null
    charityPercentage: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    subscriptionStatus: $Enums.SubStatus | null
    stripeCustomerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    selectedCharityId: string | null
    charityPercentage: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    role: number
    subscriptionStatus: number
    stripeCustomerId: number
    createdAt: number
    updatedAt: number
    selectedCharityId: number
    charityPercentage: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    charityPercentage?: true
  }

  export type ProfileSumAggregateInputType = {
    charityPercentage?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    createdAt?: true
    updatedAt?: true
    selectedCharityId?: true
    charityPercentage?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    createdAt?: true
    updatedAt?: true
    selectedCharityId?: true
    charityPercentage?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    createdAt?: true
    updatedAt?: true
    selectedCharityId?: true
    charityPercentage?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    email: string
    firstName: string | null
    lastName: string | null
    role: $Enums.Role
    subscriptionStatus: $Enums.SubStatus
    stripeCustomerId: string | null
    createdAt: Date
    updatedAt: Date
    selectedCharityId: string | null
    charityPercentage: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    selectedCharityId?: boolean
    charityPercentage?: boolean
    scores?: boolean | Profile$scoresArgs<ExtArgs>
    drawParticipations?: boolean | Profile$drawParticipationsArgs<ExtArgs>
    winnings?: boolean | Profile$winningsArgs<ExtArgs>
    selectedCharity?: boolean | Profile$selectedCharityArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    selectedCharityId?: boolean
    charityPercentage?: boolean
    selectedCharity?: boolean | Profile$selectedCharityArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    selectedCharityId?: boolean
    charityPercentage?: boolean
    selectedCharity?: boolean | Profile$selectedCharityArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    selectedCharityId?: boolean
    charityPercentage?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "role" | "subscriptionStatus" | "stripeCustomerId" | "createdAt" | "updatedAt" | "selectedCharityId" | "charityPercentage", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | Profile$scoresArgs<ExtArgs>
    drawParticipations?: boolean | Profile$drawParticipationsArgs<ExtArgs>
    winnings?: boolean | Profile$winningsArgs<ExtArgs>
    selectedCharity?: boolean | Profile$selectedCharityArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selectedCharity?: boolean | Profile$selectedCharityArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selectedCharity?: boolean | Profile$selectedCharityArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      scores: Prisma.$ScorePayload<ExtArgs>[]
      drawParticipations: Prisma.$DrawParticipantPayload<ExtArgs>[]
      winnings: Prisma.$WinnerPayload<ExtArgs>[]
      selectedCharity: Prisma.$CharityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string | null
      lastName: string | null
      role: $Enums.Role
      subscriptionStatus: $Enums.SubStatus
      stripeCustomerId: string | null
      createdAt: Date
      updatedAt: Date
      selectedCharityId: string | null
      charityPercentage: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scores<T extends Profile$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Profile$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drawParticipations<T extends Profile$drawParticipationsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$drawParticipationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    winnings<T extends Profile$winningsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$winningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    selectedCharity<T extends Profile$selectedCharityArgs<ExtArgs> = {}>(args?: Subset<T, Profile$selectedCharityArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly firstName: FieldRef<"Profile", 'String'>
    readonly lastName: FieldRef<"Profile", 'String'>
    readonly role: FieldRef<"Profile", 'Role'>
    readonly subscriptionStatus: FieldRef<"Profile", 'SubStatus'>
    readonly stripeCustomerId: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly selectedCharityId: FieldRef<"Profile", 'String'>
    readonly charityPercentage: FieldRef<"Profile", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.scores
   */
  export type Profile$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Profile.drawParticipations
   */
  export type Profile$drawParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
    where?: DrawParticipantWhereInput
    orderBy?: DrawParticipantOrderByWithRelationInput | DrawParticipantOrderByWithRelationInput[]
    cursor?: DrawParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrawParticipantScalarFieldEnum | DrawParticipantScalarFieldEnum[]
  }

  /**
   * Profile.winnings
   */
  export type Profile$winningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    cursor?: WinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Profile.selectedCharity
   */
  export type Profile$selectedCharityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    where?: CharityWhereInput
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Score
   */

  export type AggregateScore = {
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  export type ScoreAvgAggregateOutputType = {
    value: number | null
  }

  export type ScoreSumAggregateOutputType = {
    value: number | null
  }

  export type ScoreMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    value: number | null
    datePlayed: Date | null
    createdAt: Date | null
  }

  export type ScoreMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    value: number | null
    datePlayed: Date | null
    createdAt: Date | null
  }

  export type ScoreCountAggregateOutputType = {
    id: number
    profileId: number
    value: number
    datePlayed: number
    createdAt: number
    _all: number
  }


  export type ScoreAvgAggregateInputType = {
    value?: true
  }

  export type ScoreSumAggregateInputType = {
    value?: true
  }

  export type ScoreMinAggregateInputType = {
    id?: true
    profileId?: true
    value?: true
    datePlayed?: true
    createdAt?: true
  }

  export type ScoreMaxAggregateInputType = {
    id?: true
    profileId?: true
    value?: true
    datePlayed?: true
    createdAt?: true
  }

  export type ScoreCountAggregateInputType = {
    id?: true
    profileId?: true
    value?: true
    datePlayed?: true
    createdAt?: true
    _all?: true
  }

  export type ScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Score to aggregate.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scores
    **/
    _count?: true | ScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreMaxAggregateInputType
  }

  export type GetScoreAggregateType<T extends ScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScore[P]>
      : GetScalarType<T[P], AggregateScore[P]>
  }




  export type ScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithAggregationInput | ScoreOrderByWithAggregationInput[]
    by: ScoreScalarFieldEnum[] | ScoreScalarFieldEnum
    having?: ScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreCountAggregateInputType | true
    _avg?: ScoreAvgAggregateInputType
    _sum?: ScoreSumAggregateInputType
    _min?: ScoreMinAggregateInputType
    _max?: ScoreMaxAggregateInputType
  }

  export type ScoreGroupByOutputType = {
    id: string
    profileId: string
    value: number
    datePlayed: Date
    createdAt: Date
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  type GetScoreGroupByPayload<T extends ScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreGroupByOutputType[P]>
        }
      >
    >


  export type ScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    value?: boolean
    datePlayed?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    value?: boolean
    datePlayed?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    value?: boolean
    datePlayed?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectScalar = {
    id?: boolean
    profileId?: boolean
    value?: boolean
    datePlayed?: boolean
    createdAt?: boolean
  }

  export type ScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "value" | "datePlayed" | "createdAt", ExtArgs["result"]["score"]>
  export type ScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $ScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Score"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      value: number
      datePlayed: Date
      createdAt: Date
    }, ExtArgs["result"]["score"]>
    composites: {}
  }

  type ScoreGetPayload<S extends boolean | null | undefined | ScoreDefaultArgs> = $Result.GetResult<Prisma.$ScorePayload, S>

  type ScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreCountAggregateInputType | true
    }

  export interface ScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Score'], meta: { name: 'Score' } }
    /**
     * Find zero or one Score that matches the filter.
     * @param {ScoreFindUniqueArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreFindUniqueArgs>(args: SelectSubset<T, ScoreFindUniqueArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Score that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreFindUniqueOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreFindFirstArgs>(args?: SelectSubset<T, ScoreFindFirstArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scores
     * const scores = await prisma.score.findMany()
     * 
     * // Get first 10 Scores
     * const scores = await prisma.score.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreWithIdOnly = await prisma.score.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreFindManyArgs>(args?: SelectSubset<T, ScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Score.
     * @param {ScoreCreateArgs} args - Arguments to create a Score.
     * @example
     * // Create one Score
     * const Score = await prisma.score.create({
     *   data: {
     *     // ... data to create a Score
     *   }
     * })
     * 
     */
    create<T extends ScoreCreateArgs>(args: SelectSubset<T, ScoreCreateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scores.
     * @param {ScoreCreateManyArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreCreateManyArgs>(args?: SelectSubset<T, ScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scores and returns the data saved in the database.
     * @param {ScoreCreateManyAndReturnArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Score.
     * @param {ScoreDeleteArgs} args - Arguments to delete one Score.
     * @example
     * // Delete one Score
     * const Score = await prisma.score.delete({
     *   where: {
     *     // ... filter to delete one Score
     *   }
     * })
     * 
     */
    delete<T extends ScoreDeleteArgs>(args: SelectSubset<T, ScoreDeleteArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Score.
     * @param {ScoreUpdateArgs} args - Arguments to update one Score.
     * @example
     * // Update one Score
     * const score = await prisma.score.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreUpdateArgs>(args: SelectSubset<T, ScoreUpdateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scores.
     * @param {ScoreDeleteManyArgs} args - Arguments to filter Scores to delete.
     * @example
     * // Delete a few Scores
     * const { count } = await prisma.score.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreDeleteManyArgs>(args?: SelectSubset<T, ScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreUpdateManyArgs>(args: SelectSubset<T, ScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores and returns the data updated in the database.
     * @param {ScoreUpdateManyAndReturnArgs} args - Arguments to update many Scores.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Score.
     * @param {ScoreUpsertArgs} args - Arguments to update or create a Score.
     * @example
     * // Update or create a Score
     * const score = await prisma.score.upsert({
     *   create: {
     *     // ... data to create a Score
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Score we want to update
     *   }
     * })
     */
    upsert<T extends ScoreUpsertArgs>(args: SelectSubset<T, ScoreUpsertArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreCountArgs} args - Arguments to filter Scores to count.
     * @example
     * // Count the number of Scores
     * const count = await prisma.score.count({
     *   where: {
     *     // ... the filter for the Scores we want to count
     *   }
     * })
    **/
    count<T extends ScoreCountArgs>(
      args?: Subset<T, ScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScoreAggregateArgs>(args: Subset<T, ScoreAggregateArgs>): Prisma.PrismaPromise<GetScoreAggregateType<T>>

    /**
     * Group by Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreGroupByArgs} args - Group by arguments.
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
      T extends ScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreGroupByArgs['orderBy'] }
        : { orderBy?: ScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Score model
   */
  readonly fields: ScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Score.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Score model
   */
  interface ScoreFieldRefs {
    readonly id: FieldRef<"Score", 'String'>
    readonly profileId: FieldRef<"Score", 'String'>
    readonly value: FieldRef<"Score", 'Int'>
    readonly datePlayed: FieldRef<"Score", 'DateTime'>
    readonly createdAt: FieldRef<"Score", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Score findUnique
   */
  export type ScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findUniqueOrThrow
   */
  export type ScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findFirst
   */
  export type ScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findFirstOrThrow
   */
  export type ScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findMany
   */
  export type ScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Scores to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score create
   */
  export type ScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Score.
     */
    data: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
  }

  /**
   * Score createMany
   */
  export type ScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
  }

  /**
   * Score createManyAndReturn
   */
  export type ScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Score update
   */
  export type ScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Score.
     */
    data: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
    /**
     * Choose, which Score to update.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score updateMany
   */
  export type ScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
  }

  /**
   * Score updateManyAndReturn
   */
  export type ScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Score upsert
   */
  export type ScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Score to update in case it exists.
     */
    where: ScoreWhereUniqueInput
    /**
     * In case the Score found by the `where` argument doesn't exist, create a new Score with this data.
     */
    create: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
    /**
     * In case the Score was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
  }

  /**
   * Score delete
   */
  export type ScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter which Score to delete.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score deleteMany
   */
  export type ScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scores to delete
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to delete.
     */
    limit?: number
  }

  /**
   * Score without action
   */
  export type ScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
  }


  /**
   * Model Charity
   */

  export type AggregateCharity = {
    _count: CharityCountAggregateOutputType | null
    _min: CharityMinAggregateOutputType | null
    _max: CharityMaxAggregateOutputType | null
  }

  export type CharityMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type CharityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type CharityCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type CharityMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type CharityMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type CharityCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type CharityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charity to aggregate.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Charities
    **/
    _count?: true | CharityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharityMaxAggregateInputType
  }

  export type GetCharityAggregateType<T extends CharityAggregateArgs> = {
        [P in keyof T & keyof AggregateCharity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharity[P]>
      : GetScalarType<T[P], AggregateCharity[P]>
  }




  export type CharityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharityWhereInput
    orderBy?: CharityOrderByWithAggregationInput | CharityOrderByWithAggregationInput[]
    by: CharityScalarFieldEnum[] | CharityScalarFieldEnum
    having?: CharityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharityCountAggregateInputType | true
    _min?: CharityMinAggregateInputType
    _max?: CharityMaxAggregateInputType
  }

  export type CharityGroupByOutputType = {
    id: string
    name: string
    description: string
    imageUrl: string | null
    isActive: boolean
    createdAt: Date
    _count: CharityCountAggregateOutputType | null
    _min: CharityMinAggregateOutputType | null
    _max: CharityMaxAggregateOutputType | null
  }

  type GetCharityGroupByPayload<T extends CharityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharityGroupByOutputType[P]>
            : GetScalarType<T[P], CharityGroupByOutputType[P]>
        }
      >
    >


  export type CharitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    supporters?: boolean | Charity$supportersArgs<ExtArgs>
    _count?: boolean | CharityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charity"]>

  export type CharitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["charity"]>

  export type CharitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["charity"]>

  export type CharitySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type CharityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "isActive" | "createdAt", ExtArgs["result"]["charity"]>
  export type CharityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supporters?: boolean | Charity$supportersArgs<ExtArgs>
    _count?: boolean | CharityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CharityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CharityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Charity"
    objects: {
      supporters: Prisma.$ProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      imageUrl: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["charity"]>
    composites: {}
  }

  type CharityGetPayload<S extends boolean | null | undefined | CharityDefaultArgs> = $Result.GetResult<Prisma.$CharityPayload, S>

  type CharityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharityCountAggregateInputType | true
    }

  export interface CharityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Charity'], meta: { name: 'Charity' } }
    /**
     * Find zero or one Charity that matches the filter.
     * @param {CharityFindUniqueArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharityFindUniqueArgs>(args: SelectSubset<T, CharityFindUniqueArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Charity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharityFindUniqueOrThrowArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharityFindUniqueOrThrowArgs>(args: SelectSubset<T, CharityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityFindFirstArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharityFindFirstArgs>(args?: SelectSubset<T, CharityFindFirstArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityFindFirstOrThrowArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharityFindFirstOrThrowArgs>(args?: SelectSubset<T, CharityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Charities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Charities
     * const charities = await prisma.charity.findMany()
     * 
     * // Get first 10 Charities
     * const charities = await prisma.charity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const charityWithIdOnly = await prisma.charity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharityFindManyArgs>(args?: SelectSubset<T, CharityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Charity.
     * @param {CharityCreateArgs} args - Arguments to create a Charity.
     * @example
     * // Create one Charity
     * const Charity = await prisma.charity.create({
     *   data: {
     *     // ... data to create a Charity
     *   }
     * })
     * 
     */
    create<T extends CharityCreateArgs>(args: SelectSubset<T, CharityCreateArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Charities.
     * @param {CharityCreateManyArgs} args - Arguments to create many Charities.
     * @example
     * // Create many Charities
     * const charity = await prisma.charity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharityCreateManyArgs>(args?: SelectSubset<T, CharityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Charities and returns the data saved in the database.
     * @param {CharityCreateManyAndReturnArgs} args - Arguments to create many Charities.
     * @example
     * // Create many Charities
     * const charity = await prisma.charity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Charities and only return the `id`
     * const charityWithIdOnly = await prisma.charity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharityCreateManyAndReturnArgs>(args?: SelectSubset<T, CharityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Charity.
     * @param {CharityDeleteArgs} args - Arguments to delete one Charity.
     * @example
     * // Delete one Charity
     * const Charity = await prisma.charity.delete({
     *   where: {
     *     // ... filter to delete one Charity
     *   }
     * })
     * 
     */
    delete<T extends CharityDeleteArgs>(args: SelectSubset<T, CharityDeleteArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Charity.
     * @param {CharityUpdateArgs} args - Arguments to update one Charity.
     * @example
     * // Update one Charity
     * const charity = await prisma.charity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharityUpdateArgs>(args: SelectSubset<T, CharityUpdateArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Charities.
     * @param {CharityDeleteManyArgs} args - Arguments to filter Charities to delete.
     * @example
     * // Delete a few Charities
     * const { count } = await prisma.charity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharityDeleteManyArgs>(args?: SelectSubset<T, CharityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Charities
     * const charity = await prisma.charity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharityUpdateManyArgs>(args: SelectSubset<T, CharityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charities and returns the data updated in the database.
     * @param {CharityUpdateManyAndReturnArgs} args - Arguments to update many Charities.
     * @example
     * // Update many Charities
     * const charity = await prisma.charity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Charities and only return the `id`
     * const charityWithIdOnly = await prisma.charity.updateManyAndReturn({
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
    updateManyAndReturn<T extends CharityUpdateManyAndReturnArgs>(args: SelectSubset<T, CharityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Charity.
     * @param {CharityUpsertArgs} args - Arguments to update or create a Charity.
     * @example
     * // Update or create a Charity
     * const charity = await prisma.charity.upsert({
     *   create: {
     *     // ... data to create a Charity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Charity we want to update
     *   }
     * })
     */
    upsert<T extends CharityUpsertArgs>(args: SelectSubset<T, CharityUpsertArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Charities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityCountArgs} args - Arguments to filter Charities to count.
     * @example
     * // Count the number of Charities
     * const count = await prisma.charity.count({
     *   where: {
     *     // ... the filter for the Charities we want to count
     *   }
     * })
    **/
    count<T extends CharityCountArgs>(
      args?: Subset<T, CharityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Charity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharityAggregateArgs>(args: Subset<T, CharityAggregateArgs>): Prisma.PrismaPromise<GetCharityAggregateType<T>>

    /**
     * Group by Charity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityGroupByArgs} args - Group by arguments.
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
      T extends CharityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharityGroupByArgs['orderBy'] }
        : { orderBy?: CharityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Charity model
   */
  readonly fields: CharityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Charity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supporters<T extends Charity$supportersArgs<ExtArgs> = {}>(args?: Subset<T, Charity$supportersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Charity model
   */
  interface CharityFieldRefs {
    readonly id: FieldRef<"Charity", 'String'>
    readonly name: FieldRef<"Charity", 'String'>
    readonly description: FieldRef<"Charity", 'String'>
    readonly imageUrl: FieldRef<"Charity", 'String'>
    readonly isActive: FieldRef<"Charity", 'Boolean'>
    readonly createdAt: FieldRef<"Charity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Charity findUnique
   */
  export type CharityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity findUniqueOrThrow
   */
  export type CharityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity findFirst
   */
  export type CharityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charities.
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charities.
     */
    distinct?: CharityScalarFieldEnum | CharityScalarFieldEnum[]
  }

  /**
   * Charity findFirstOrThrow
   */
  export type CharityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charities.
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charities.
     */
    distinct?: CharityScalarFieldEnum | CharityScalarFieldEnum[]
  }

  /**
   * Charity findMany
   */
  export type CharityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charities to fetch.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Charities.
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charities.
     */
    distinct?: CharityScalarFieldEnum | CharityScalarFieldEnum[]
  }

  /**
   * Charity create
   */
  export type CharityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * The data needed to create a Charity.
     */
    data: XOR<CharityCreateInput, CharityUncheckedCreateInput>
  }

  /**
   * Charity createMany
   */
  export type CharityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Charities.
     */
    data: CharityCreateManyInput | CharityCreateManyInput[]
  }

  /**
   * Charity createManyAndReturn
   */
  export type CharityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * The data used to create many Charities.
     */
    data: CharityCreateManyInput | CharityCreateManyInput[]
  }

  /**
   * Charity update
   */
  export type CharityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * The data needed to update a Charity.
     */
    data: XOR<CharityUpdateInput, CharityUncheckedUpdateInput>
    /**
     * Choose, which Charity to update.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity updateMany
   */
  export type CharityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Charities.
     */
    data: XOR<CharityUpdateManyMutationInput, CharityUncheckedUpdateManyInput>
    /**
     * Filter which Charities to update
     */
    where?: CharityWhereInput
    /**
     * Limit how many Charities to update.
     */
    limit?: number
  }

  /**
   * Charity updateManyAndReturn
   */
  export type CharityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * The data used to update Charities.
     */
    data: XOR<CharityUpdateManyMutationInput, CharityUncheckedUpdateManyInput>
    /**
     * Filter which Charities to update
     */
    where?: CharityWhereInput
    /**
     * Limit how many Charities to update.
     */
    limit?: number
  }

  /**
   * Charity upsert
   */
  export type CharityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * The filter to search for the Charity to update in case it exists.
     */
    where: CharityWhereUniqueInput
    /**
     * In case the Charity found by the `where` argument doesn't exist, create a new Charity with this data.
     */
    create: XOR<CharityCreateInput, CharityUncheckedCreateInput>
    /**
     * In case the Charity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharityUpdateInput, CharityUncheckedUpdateInput>
  }

  /**
   * Charity delete
   */
  export type CharityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter which Charity to delete.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity deleteMany
   */
  export type CharityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charities to delete
     */
    where?: CharityWhereInput
    /**
     * Limit how many Charities to delete.
     */
    limit?: number
  }

  /**
   * Charity.supporters
   */
  export type Charity$supportersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Charity without action
   */
  export type CharityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
  }


  /**
   * Model DrawResult
   */

  export type AggregateDrawResult = {
    _count: DrawResultCountAggregateOutputType | null
    _avg: DrawResultAvgAggregateOutputType | null
    _sum: DrawResultSumAggregateOutputType | null
    _min: DrawResultMinAggregateOutputType | null
    _max: DrawResultMaxAggregateOutputType | null
  }

  export type DrawResultAvgAggregateOutputType = {
    poolTotal: number | null
  }

  export type DrawResultSumAggregateOutputType = {
    poolTotal: number | null
  }

  export type DrawResultMinAggregateOutputType = {
    id: string | null
    monthYear: string | null
    poolTotal: number | null
    winningNumbers: string | null
    status: $Enums.DrawState | null
    createdAt: Date | null
    executedAt: Date | null
  }

  export type DrawResultMaxAggregateOutputType = {
    id: string | null
    monthYear: string | null
    poolTotal: number | null
    winningNumbers: string | null
    status: $Enums.DrawState | null
    createdAt: Date | null
    executedAt: Date | null
  }

  export type DrawResultCountAggregateOutputType = {
    id: number
    monthYear: number
    poolTotal: number
    winningNumbers: number
    status: number
    createdAt: number
    executedAt: number
    _all: number
  }


  export type DrawResultAvgAggregateInputType = {
    poolTotal?: true
  }

  export type DrawResultSumAggregateInputType = {
    poolTotal?: true
  }

  export type DrawResultMinAggregateInputType = {
    id?: true
    monthYear?: true
    poolTotal?: true
    winningNumbers?: true
    status?: true
    createdAt?: true
    executedAt?: true
  }

  export type DrawResultMaxAggregateInputType = {
    id?: true
    monthYear?: true
    poolTotal?: true
    winningNumbers?: true
    status?: true
    createdAt?: true
    executedAt?: true
  }

  export type DrawResultCountAggregateInputType = {
    id?: true
    monthYear?: true
    poolTotal?: true
    winningNumbers?: true
    status?: true
    createdAt?: true
    executedAt?: true
    _all?: true
  }

  export type DrawResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrawResult to aggregate.
     */
    where?: DrawResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawResults to fetch.
     */
    orderBy?: DrawResultOrderByWithRelationInput | DrawResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrawResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrawResults
    **/
    _count?: true | DrawResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrawResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrawResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrawResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrawResultMaxAggregateInputType
  }

  export type GetDrawResultAggregateType<T extends DrawResultAggregateArgs> = {
        [P in keyof T & keyof AggregateDrawResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrawResult[P]>
      : GetScalarType<T[P], AggregateDrawResult[P]>
  }




  export type DrawResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawResultWhereInput
    orderBy?: DrawResultOrderByWithAggregationInput | DrawResultOrderByWithAggregationInput[]
    by: DrawResultScalarFieldEnum[] | DrawResultScalarFieldEnum
    having?: DrawResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrawResultCountAggregateInputType | true
    _avg?: DrawResultAvgAggregateInputType
    _sum?: DrawResultSumAggregateInputType
    _min?: DrawResultMinAggregateInputType
    _max?: DrawResultMaxAggregateInputType
  }

  export type DrawResultGroupByOutputType = {
    id: string
    monthYear: string
    poolTotal: number
    winningNumbers: string
    status: $Enums.DrawState
    createdAt: Date
    executedAt: Date | null
    _count: DrawResultCountAggregateOutputType | null
    _avg: DrawResultAvgAggregateOutputType | null
    _sum: DrawResultSumAggregateOutputType | null
    _min: DrawResultMinAggregateOutputType | null
    _max: DrawResultMaxAggregateOutputType | null
  }

  type GetDrawResultGroupByPayload<T extends DrawResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrawResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrawResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrawResultGroupByOutputType[P]>
            : GetScalarType<T[P], DrawResultGroupByOutputType[P]>
        }
      >
    >


  export type DrawResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monthYear?: boolean
    poolTotal?: boolean
    winningNumbers?: boolean
    status?: boolean
    createdAt?: boolean
    executedAt?: boolean
    winners?: boolean | DrawResult$winnersArgs<ExtArgs>
    participants?: boolean | DrawResult$participantsArgs<ExtArgs>
    _count?: boolean | DrawResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawResult"]>

  export type DrawResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monthYear?: boolean
    poolTotal?: boolean
    winningNumbers?: boolean
    status?: boolean
    createdAt?: boolean
    executedAt?: boolean
  }, ExtArgs["result"]["drawResult"]>

  export type DrawResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monthYear?: boolean
    poolTotal?: boolean
    winningNumbers?: boolean
    status?: boolean
    createdAt?: boolean
    executedAt?: boolean
  }, ExtArgs["result"]["drawResult"]>

  export type DrawResultSelectScalar = {
    id?: boolean
    monthYear?: boolean
    poolTotal?: boolean
    winningNumbers?: boolean
    status?: boolean
    createdAt?: boolean
    executedAt?: boolean
  }

  export type DrawResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monthYear" | "poolTotal" | "winningNumbers" | "status" | "createdAt" | "executedAt", ExtArgs["result"]["drawResult"]>
  export type DrawResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winners?: boolean | DrawResult$winnersArgs<ExtArgs>
    participants?: boolean | DrawResult$participantsArgs<ExtArgs>
    _count?: boolean | DrawResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DrawResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DrawResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DrawResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DrawResult"
    objects: {
      winners: Prisma.$WinnerPayload<ExtArgs>[]
      participants: Prisma.$DrawParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      monthYear: string
      poolTotal: number
      winningNumbers: string
      status: $Enums.DrawState
      createdAt: Date
      executedAt: Date | null
    }, ExtArgs["result"]["drawResult"]>
    composites: {}
  }

  type DrawResultGetPayload<S extends boolean | null | undefined | DrawResultDefaultArgs> = $Result.GetResult<Prisma.$DrawResultPayload, S>

  type DrawResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrawResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrawResultCountAggregateInputType | true
    }

  export interface DrawResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DrawResult'], meta: { name: 'DrawResult' } }
    /**
     * Find zero or one DrawResult that matches the filter.
     * @param {DrawResultFindUniqueArgs} args - Arguments to find a DrawResult
     * @example
     * // Get one DrawResult
     * const drawResult = await prisma.drawResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrawResultFindUniqueArgs>(args: SelectSubset<T, DrawResultFindUniqueArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DrawResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrawResultFindUniqueOrThrowArgs} args - Arguments to find a DrawResult
     * @example
     * // Get one DrawResult
     * const drawResult = await prisma.drawResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrawResultFindUniqueOrThrowArgs>(args: SelectSubset<T, DrawResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrawResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultFindFirstArgs} args - Arguments to find a DrawResult
     * @example
     * // Get one DrawResult
     * const drawResult = await prisma.drawResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrawResultFindFirstArgs>(args?: SelectSubset<T, DrawResultFindFirstArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrawResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultFindFirstOrThrowArgs} args - Arguments to find a DrawResult
     * @example
     * // Get one DrawResult
     * const drawResult = await prisma.drawResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrawResultFindFirstOrThrowArgs>(args?: SelectSubset<T, DrawResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DrawResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrawResults
     * const drawResults = await prisma.drawResult.findMany()
     * 
     * // Get first 10 DrawResults
     * const drawResults = await prisma.drawResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drawResultWithIdOnly = await prisma.drawResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrawResultFindManyArgs>(args?: SelectSubset<T, DrawResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DrawResult.
     * @param {DrawResultCreateArgs} args - Arguments to create a DrawResult.
     * @example
     * // Create one DrawResult
     * const DrawResult = await prisma.drawResult.create({
     *   data: {
     *     // ... data to create a DrawResult
     *   }
     * })
     * 
     */
    create<T extends DrawResultCreateArgs>(args: SelectSubset<T, DrawResultCreateArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DrawResults.
     * @param {DrawResultCreateManyArgs} args - Arguments to create many DrawResults.
     * @example
     * // Create many DrawResults
     * const drawResult = await prisma.drawResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrawResultCreateManyArgs>(args?: SelectSubset<T, DrawResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DrawResults and returns the data saved in the database.
     * @param {DrawResultCreateManyAndReturnArgs} args - Arguments to create many DrawResults.
     * @example
     * // Create many DrawResults
     * const drawResult = await prisma.drawResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DrawResults and only return the `id`
     * const drawResultWithIdOnly = await prisma.drawResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrawResultCreateManyAndReturnArgs>(args?: SelectSubset<T, DrawResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DrawResult.
     * @param {DrawResultDeleteArgs} args - Arguments to delete one DrawResult.
     * @example
     * // Delete one DrawResult
     * const DrawResult = await prisma.drawResult.delete({
     *   where: {
     *     // ... filter to delete one DrawResult
     *   }
     * })
     * 
     */
    delete<T extends DrawResultDeleteArgs>(args: SelectSubset<T, DrawResultDeleteArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DrawResult.
     * @param {DrawResultUpdateArgs} args - Arguments to update one DrawResult.
     * @example
     * // Update one DrawResult
     * const drawResult = await prisma.drawResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrawResultUpdateArgs>(args: SelectSubset<T, DrawResultUpdateArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DrawResults.
     * @param {DrawResultDeleteManyArgs} args - Arguments to filter DrawResults to delete.
     * @example
     * // Delete a few DrawResults
     * const { count } = await prisma.drawResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrawResultDeleteManyArgs>(args?: SelectSubset<T, DrawResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrawResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrawResults
     * const drawResult = await prisma.drawResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrawResultUpdateManyArgs>(args: SelectSubset<T, DrawResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrawResults and returns the data updated in the database.
     * @param {DrawResultUpdateManyAndReturnArgs} args - Arguments to update many DrawResults.
     * @example
     * // Update many DrawResults
     * const drawResult = await prisma.drawResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DrawResults and only return the `id`
     * const drawResultWithIdOnly = await prisma.drawResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends DrawResultUpdateManyAndReturnArgs>(args: SelectSubset<T, DrawResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DrawResult.
     * @param {DrawResultUpsertArgs} args - Arguments to update or create a DrawResult.
     * @example
     * // Update or create a DrawResult
     * const drawResult = await prisma.drawResult.upsert({
     *   create: {
     *     // ... data to create a DrawResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrawResult we want to update
     *   }
     * })
     */
    upsert<T extends DrawResultUpsertArgs>(args: SelectSubset<T, DrawResultUpsertArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DrawResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultCountArgs} args - Arguments to filter DrawResults to count.
     * @example
     * // Count the number of DrawResults
     * const count = await prisma.drawResult.count({
     *   where: {
     *     // ... the filter for the DrawResults we want to count
     *   }
     * })
    **/
    count<T extends DrawResultCountArgs>(
      args?: Subset<T, DrawResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrawResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrawResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrawResultAggregateArgs>(args: Subset<T, DrawResultAggregateArgs>): Prisma.PrismaPromise<GetDrawResultAggregateType<T>>

    /**
     * Group by DrawResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultGroupByArgs} args - Group by arguments.
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
      T extends DrawResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrawResultGroupByArgs['orderBy'] }
        : { orderBy?: DrawResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrawResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrawResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DrawResult model
   */
  readonly fields: DrawResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DrawResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrawResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    winners<T extends DrawResult$winnersArgs<ExtArgs> = {}>(args?: Subset<T, DrawResult$winnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends DrawResult$participantsArgs<ExtArgs> = {}>(args?: Subset<T, DrawResult$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DrawResult model
   */
  interface DrawResultFieldRefs {
    readonly id: FieldRef<"DrawResult", 'String'>
    readonly monthYear: FieldRef<"DrawResult", 'String'>
    readonly poolTotal: FieldRef<"DrawResult", 'Float'>
    readonly winningNumbers: FieldRef<"DrawResult", 'String'>
    readonly status: FieldRef<"DrawResult", 'DrawState'>
    readonly createdAt: FieldRef<"DrawResult", 'DateTime'>
    readonly executedAt: FieldRef<"DrawResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DrawResult findUnique
   */
  export type DrawResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter, which DrawResult to fetch.
     */
    where: DrawResultWhereUniqueInput
  }

  /**
   * DrawResult findUniqueOrThrow
   */
  export type DrawResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter, which DrawResult to fetch.
     */
    where: DrawResultWhereUniqueInput
  }

  /**
   * DrawResult findFirst
   */
  export type DrawResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter, which DrawResult to fetch.
     */
    where?: DrawResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawResults to fetch.
     */
    orderBy?: DrawResultOrderByWithRelationInput | DrawResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrawResults.
     */
    cursor?: DrawResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrawResults.
     */
    distinct?: DrawResultScalarFieldEnum | DrawResultScalarFieldEnum[]
  }

  /**
   * DrawResult findFirstOrThrow
   */
  export type DrawResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter, which DrawResult to fetch.
     */
    where?: DrawResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawResults to fetch.
     */
    orderBy?: DrawResultOrderByWithRelationInput | DrawResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrawResults.
     */
    cursor?: DrawResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrawResults.
     */
    distinct?: DrawResultScalarFieldEnum | DrawResultScalarFieldEnum[]
  }

  /**
   * DrawResult findMany
   */
  export type DrawResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter, which DrawResults to fetch.
     */
    where?: DrawResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawResults to fetch.
     */
    orderBy?: DrawResultOrderByWithRelationInput | DrawResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrawResults.
     */
    cursor?: DrawResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrawResults.
     */
    distinct?: DrawResultScalarFieldEnum | DrawResultScalarFieldEnum[]
  }

  /**
   * DrawResult create
   */
  export type DrawResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * The data needed to create a DrawResult.
     */
    data: XOR<DrawResultCreateInput, DrawResultUncheckedCreateInput>
  }

  /**
   * DrawResult createMany
   */
  export type DrawResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DrawResults.
     */
    data: DrawResultCreateManyInput | DrawResultCreateManyInput[]
  }

  /**
   * DrawResult createManyAndReturn
   */
  export type DrawResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * The data used to create many DrawResults.
     */
    data: DrawResultCreateManyInput | DrawResultCreateManyInput[]
  }

  /**
   * DrawResult update
   */
  export type DrawResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * The data needed to update a DrawResult.
     */
    data: XOR<DrawResultUpdateInput, DrawResultUncheckedUpdateInput>
    /**
     * Choose, which DrawResult to update.
     */
    where: DrawResultWhereUniqueInput
  }

  /**
   * DrawResult updateMany
   */
  export type DrawResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DrawResults.
     */
    data: XOR<DrawResultUpdateManyMutationInput, DrawResultUncheckedUpdateManyInput>
    /**
     * Filter which DrawResults to update
     */
    where?: DrawResultWhereInput
    /**
     * Limit how many DrawResults to update.
     */
    limit?: number
  }

  /**
   * DrawResult updateManyAndReturn
   */
  export type DrawResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * The data used to update DrawResults.
     */
    data: XOR<DrawResultUpdateManyMutationInput, DrawResultUncheckedUpdateManyInput>
    /**
     * Filter which DrawResults to update
     */
    where?: DrawResultWhereInput
    /**
     * Limit how many DrawResults to update.
     */
    limit?: number
  }

  /**
   * DrawResult upsert
   */
  export type DrawResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * The filter to search for the DrawResult to update in case it exists.
     */
    where: DrawResultWhereUniqueInput
    /**
     * In case the DrawResult found by the `where` argument doesn't exist, create a new DrawResult with this data.
     */
    create: XOR<DrawResultCreateInput, DrawResultUncheckedCreateInput>
    /**
     * In case the DrawResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrawResultUpdateInput, DrawResultUncheckedUpdateInput>
  }

  /**
   * DrawResult delete
   */
  export type DrawResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter which DrawResult to delete.
     */
    where: DrawResultWhereUniqueInput
  }

  /**
   * DrawResult deleteMany
   */
  export type DrawResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrawResults to delete
     */
    where?: DrawResultWhereInput
    /**
     * Limit how many DrawResults to delete.
     */
    limit?: number
  }

  /**
   * DrawResult.winners
   */
  export type DrawResult$winnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    cursor?: WinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * DrawResult.participants
   */
  export type DrawResult$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
    where?: DrawParticipantWhereInput
    orderBy?: DrawParticipantOrderByWithRelationInput | DrawParticipantOrderByWithRelationInput[]
    cursor?: DrawParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrawParticipantScalarFieldEnum | DrawParticipantScalarFieldEnum[]
  }

  /**
   * DrawResult without action
   */
  export type DrawResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
  }


  /**
   * Model DrawParticipant
   */

  export type AggregateDrawParticipant = {
    _count: DrawParticipantCountAggregateOutputType | null
    _min: DrawParticipantMinAggregateOutputType | null
    _max: DrawParticipantMaxAggregateOutputType | null
  }

  export type DrawParticipantMinAggregateOutputType = {
    id: string | null
    drawId: string | null
    profileId: string | null
    lockedScores: string | null
  }

  export type DrawParticipantMaxAggregateOutputType = {
    id: string | null
    drawId: string | null
    profileId: string | null
    lockedScores: string | null
  }

  export type DrawParticipantCountAggregateOutputType = {
    id: number
    drawId: number
    profileId: number
    lockedScores: number
    _all: number
  }


  export type DrawParticipantMinAggregateInputType = {
    id?: true
    drawId?: true
    profileId?: true
    lockedScores?: true
  }

  export type DrawParticipantMaxAggregateInputType = {
    id?: true
    drawId?: true
    profileId?: true
    lockedScores?: true
  }

  export type DrawParticipantCountAggregateInputType = {
    id?: true
    drawId?: true
    profileId?: true
    lockedScores?: true
    _all?: true
  }

  export type DrawParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrawParticipant to aggregate.
     */
    where?: DrawParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawParticipants to fetch.
     */
    orderBy?: DrawParticipantOrderByWithRelationInput | DrawParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrawParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrawParticipants
    **/
    _count?: true | DrawParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrawParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrawParticipantMaxAggregateInputType
  }

  export type GetDrawParticipantAggregateType<T extends DrawParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateDrawParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrawParticipant[P]>
      : GetScalarType<T[P], AggregateDrawParticipant[P]>
  }




  export type DrawParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawParticipantWhereInput
    orderBy?: DrawParticipantOrderByWithAggregationInput | DrawParticipantOrderByWithAggregationInput[]
    by: DrawParticipantScalarFieldEnum[] | DrawParticipantScalarFieldEnum
    having?: DrawParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrawParticipantCountAggregateInputType | true
    _min?: DrawParticipantMinAggregateInputType
    _max?: DrawParticipantMaxAggregateInputType
  }

  export type DrawParticipantGroupByOutputType = {
    id: string
    drawId: string
    profileId: string
    lockedScores: string
    _count: DrawParticipantCountAggregateOutputType | null
    _min: DrawParticipantMinAggregateOutputType | null
    _max: DrawParticipantMaxAggregateOutputType | null
  }

  type GetDrawParticipantGroupByPayload<T extends DrawParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrawParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrawParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrawParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], DrawParticipantGroupByOutputType[P]>
        }
      >
    >


  export type DrawParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    profileId?: boolean
    lockedScores?: boolean
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawParticipant"]>

  export type DrawParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    profileId?: boolean
    lockedScores?: boolean
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawParticipant"]>

  export type DrawParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    profileId?: boolean
    lockedScores?: boolean
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawParticipant"]>

  export type DrawParticipantSelectScalar = {
    id?: boolean
    drawId?: boolean
    profileId?: boolean
    lockedScores?: boolean
  }

  export type DrawParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "drawId" | "profileId" | "lockedScores", ExtArgs["result"]["drawParticipant"]>
  export type DrawParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type DrawParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type DrawParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $DrawParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DrawParticipant"
    objects: {
      draw: Prisma.$DrawResultPayload<ExtArgs>
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      drawId: string
      profileId: string
      lockedScores: string
    }, ExtArgs["result"]["drawParticipant"]>
    composites: {}
  }

  type DrawParticipantGetPayload<S extends boolean | null | undefined | DrawParticipantDefaultArgs> = $Result.GetResult<Prisma.$DrawParticipantPayload, S>

  type DrawParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrawParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrawParticipantCountAggregateInputType | true
    }

  export interface DrawParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DrawParticipant'], meta: { name: 'DrawParticipant' } }
    /**
     * Find zero or one DrawParticipant that matches the filter.
     * @param {DrawParticipantFindUniqueArgs} args - Arguments to find a DrawParticipant
     * @example
     * // Get one DrawParticipant
     * const drawParticipant = await prisma.drawParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrawParticipantFindUniqueArgs>(args: SelectSubset<T, DrawParticipantFindUniqueArgs<ExtArgs>>): Prisma__DrawParticipantClient<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DrawParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrawParticipantFindUniqueOrThrowArgs} args - Arguments to find a DrawParticipant
     * @example
     * // Get one DrawParticipant
     * const drawParticipant = await prisma.drawParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrawParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, DrawParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrawParticipantClient<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrawParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawParticipantFindFirstArgs} args - Arguments to find a DrawParticipant
     * @example
     * // Get one DrawParticipant
     * const drawParticipant = await prisma.drawParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrawParticipantFindFirstArgs>(args?: SelectSubset<T, DrawParticipantFindFirstArgs<ExtArgs>>): Prisma__DrawParticipantClient<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrawParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawParticipantFindFirstOrThrowArgs} args - Arguments to find a DrawParticipant
     * @example
     * // Get one DrawParticipant
     * const drawParticipant = await prisma.drawParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrawParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, DrawParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrawParticipantClient<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DrawParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrawParticipants
     * const drawParticipants = await prisma.drawParticipant.findMany()
     * 
     * // Get first 10 DrawParticipants
     * const drawParticipants = await prisma.drawParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drawParticipantWithIdOnly = await prisma.drawParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrawParticipantFindManyArgs>(args?: SelectSubset<T, DrawParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DrawParticipant.
     * @param {DrawParticipantCreateArgs} args - Arguments to create a DrawParticipant.
     * @example
     * // Create one DrawParticipant
     * const DrawParticipant = await prisma.drawParticipant.create({
     *   data: {
     *     // ... data to create a DrawParticipant
     *   }
     * })
     * 
     */
    create<T extends DrawParticipantCreateArgs>(args: SelectSubset<T, DrawParticipantCreateArgs<ExtArgs>>): Prisma__DrawParticipantClient<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DrawParticipants.
     * @param {DrawParticipantCreateManyArgs} args - Arguments to create many DrawParticipants.
     * @example
     * // Create many DrawParticipants
     * const drawParticipant = await prisma.drawParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrawParticipantCreateManyArgs>(args?: SelectSubset<T, DrawParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DrawParticipants and returns the data saved in the database.
     * @param {DrawParticipantCreateManyAndReturnArgs} args - Arguments to create many DrawParticipants.
     * @example
     * // Create many DrawParticipants
     * const drawParticipant = await prisma.drawParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DrawParticipants and only return the `id`
     * const drawParticipantWithIdOnly = await prisma.drawParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrawParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, DrawParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DrawParticipant.
     * @param {DrawParticipantDeleteArgs} args - Arguments to delete one DrawParticipant.
     * @example
     * // Delete one DrawParticipant
     * const DrawParticipant = await prisma.drawParticipant.delete({
     *   where: {
     *     // ... filter to delete one DrawParticipant
     *   }
     * })
     * 
     */
    delete<T extends DrawParticipantDeleteArgs>(args: SelectSubset<T, DrawParticipantDeleteArgs<ExtArgs>>): Prisma__DrawParticipantClient<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DrawParticipant.
     * @param {DrawParticipantUpdateArgs} args - Arguments to update one DrawParticipant.
     * @example
     * // Update one DrawParticipant
     * const drawParticipant = await prisma.drawParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrawParticipantUpdateArgs>(args: SelectSubset<T, DrawParticipantUpdateArgs<ExtArgs>>): Prisma__DrawParticipantClient<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DrawParticipants.
     * @param {DrawParticipantDeleteManyArgs} args - Arguments to filter DrawParticipants to delete.
     * @example
     * // Delete a few DrawParticipants
     * const { count } = await prisma.drawParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrawParticipantDeleteManyArgs>(args?: SelectSubset<T, DrawParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrawParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrawParticipants
     * const drawParticipant = await prisma.drawParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrawParticipantUpdateManyArgs>(args: SelectSubset<T, DrawParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrawParticipants and returns the data updated in the database.
     * @param {DrawParticipantUpdateManyAndReturnArgs} args - Arguments to update many DrawParticipants.
     * @example
     * // Update many DrawParticipants
     * const drawParticipant = await prisma.drawParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DrawParticipants and only return the `id`
     * const drawParticipantWithIdOnly = await prisma.drawParticipant.updateManyAndReturn({
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
    updateManyAndReturn<T extends DrawParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, DrawParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DrawParticipant.
     * @param {DrawParticipantUpsertArgs} args - Arguments to update or create a DrawParticipant.
     * @example
     * // Update or create a DrawParticipant
     * const drawParticipant = await prisma.drawParticipant.upsert({
     *   create: {
     *     // ... data to create a DrawParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrawParticipant we want to update
     *   }
     * })
     */
    upsert<T extends DrawParticipantUpsertArgs>(args: SelectSubset<T, DrawParticipantUpsertArgs<ExtArgs>>): Prisma__DrawParticipantClient<$Result.GetResult<Prisma.$DrawParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DrawParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawParticipantCountArgs} args - Arguments to filter DrawParticipants to count.
     * @example
     * // Count the number of DrawParticipants
     * const count = await prisma.drawParticipant.count({
     *   where: {
     *     // ... the filter for the DrawParticipants we want to count
     *   }
     * })
    **/
    count<T extends DrawParticipantCountArgs>(
      args?: Subset<T, DrawParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrawParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrawParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrawParticipantAggregateArgs>(args: Subset<T, DrawParticipantAggregateArgs>): Prisma.PrismaPromise<GetDrawParticipantAggregateType<T>>

    /**
     * Group by DrawParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawParticipantGroupByArgs} args - Group by arguments.
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
      T extends DrawParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrawParticipantGroupByArgs['orderBy'] }
        : { orderBy?: DrawParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrawParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrawParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DrawParticipant model
   */
  readonly fields: DrawParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DrawParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrawParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    draw<T extends DrawResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrawResultDefaultArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DrawParticipant model
   */
  interface DrawParticipantFieldRefs {
    readonly id: FieldRef<"DrawParticipant", 'String'>
    readonly drawId: FieldRef<"DrawParticipant", 'String'>
    readonly profileId: FieldRef<"DrawParticipant", 'String'>
    readonly lockedScores: FieldRef<"DrawParticipant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DrawParticipant findUnique
   */
  export type DrawParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
    /**
     * Filter, which DrawParticipant to fetch.
     */
    where: DrawParticipantWhereUniqueInput
  }

  /**
   * DrawParticipant findUniqueOrThrow
   */
  export type DrawParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
    /**
     * Filter, which DrawParticipant to fetch.
     */
    where: DrawParticipantWhereUniqueInput
  }

  /**
   * DrawParticipant findFirst
   */
  export type DrawParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
    /**
     * Filter, which DrawParticipant to fetch.
     */
    where?: DrawParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawParticipants to fetch.
     */
    orderBy?: DrawParticipantOrderByWithRelationInput | DrawParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrawParticipants.
     */
    cursor?: DrawParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrawParticipants.
     */
    distinct?: DrawParticipantScalarFieldEnum | DrawParticipantScalarFieldEnum[]
  }

  /**
   * DrawParticipant findFirstOrThrow
   */
  export type DrawParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
    /**
     * Filter, which DrawParticipant to fetch.
     */
    where?: DrawParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawParticipants to fetch.
     */
    orderBy?: DrawParticipantOrderByWithRelationInput | DrawParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrawParticipants.
     */
    cursor?: DrawParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrawParticipants.
     */
    distinct?: DrawParticipantScalarFieldEnum | DrawParticipantScalarFieldEnum[]
  }

  /**
   * DrawParticipant findMany
   */
  export type DrawParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
    /**
     * Filter, which DrawParticipants to fetch.
     */
    where?: DrawParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawParticipants to fetch.
     */
    orderBy?: DrawParticipantOrderByWithRelationInput | DrawParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrawParticipants.
     */
    cursor?: DrawParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrawParticipants.
     */
    distinct?: DrawParticipantScalarFieldEnum | DrawParticipantScalarFieldEnum[]
  }

  /**
   * DrawParticipant create
   */
  export type DrawParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a DrawParticipant.
     */
    data: XOR<DrawParticipantCreateInput, DrawParticipantUncheckedCreateInput>
  }

  /**
   * DrawParticipant createMany
   */
  export type DrawParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DrawParticipants.
     */
    data: DrawParticipantCreateManyInput | DrawParticipantCreateManyInput[]
  }

  /**
   * DrawParticipant createManyAndReturn
   */
  export type DrawParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many DrawParticipants.
     */
    data: DrawParticipantCreateManyInput | DrawParticipantCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrawParticipant update
   */
  export type DrawParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a DrawParticipant.
     */
    data: XOR<DrawParticipantUpdateInput, DrawParticipantUncheckedUpdateInput>
    /**
     * Choose, which DrawParticipant to update.
     */
    where: DrawParticipantWhereUniqueInput
  }

  /**
   * DrawParticipant updateMany
   */
  export type DrawParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DrawParticipants.
     */
    data: XOR<DrawParticipantUpdateManyMutationInput, DrawParticipantUncheckedUpdateManyInput>
    /**
     * Filter which DrawParticipants to update
     */
    where?: DrawParticipantWhereInput
    /**
     * Limit how many DrawParticipants to update.
     */
    limit?: number
  }

  /**
   * DrawParticipant updateManyAndReturn
   */
  export type DrawParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * The data used to update DrawParticipants.
     */
    data: XOR<DrawParticipantUpdateManyMutationInput, DrawParticipantUncheckedUpdateManyInput>
    /**
     * Filter which DrawParticipants to update
     */
    where?: DrawParticipantWhereInput
    /**
     * Limit how many DrawParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrawParticipant upsert
   */
  export type DrawParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the DrawParticipant to update in case it exists.
     */
    where: DrawParticipantWhereUniqueInput
    /**
     * In case the DrawParticipant found by the `where` argument doesn't exist, create a new DrawParticipant with this data.
     */
    create: XOR<DrawParticipantCreateInput, DrawParticipantUncheckedCreateInput>
    /**
     * In case the DrawParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrawParticipantUpdateInput, DrawParticipantUncheckedUpdateInput>
  }

  /**
   * DrawParticipant delete
   */
  export type DrawParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
    /**
     * Filter which DrawParticipant to delete.
     */
    where: DrawParticipantWhereUniqueInput
  }

  /**
   * DrawParticipant deleteMany
   */
  export type DrawParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrawParticipants to delete
     */
    where?: DrawParticipantWhereInput
    /**
     * Limit how many DrawParticipants to delete.
     */
    limit?: number
  }

  /**
   * DrawParticipant without action
   */
  export type DrawParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawParticipant
     */
    select?: DrawParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawParticipant
     */
    omit?: DrawParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Winner
   */

  export type AggregateWinner = {
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  export type WinnerAvgAggregateOutputType = {
    matchCount: number | null
    prizeAmount: number | null
  }

  export type WinnerSumAggregateOutputType = {
    matchCount: number | null
    prizeAmount: number | null
  }

  export type WinnerMinAggregateOutputType = {
    id: string | null
    drawId: string | null
    profileId: string | null
    matchCount: number | null
    prizeAmount: number | null
    proofImageUrl: string | null
    status: $Enums.PayoutStatus | null
  }

  export type WinnerMaxAggregateOutputType = {
    id: string | null
    drawId: string | null
    profileId: string | null
    matchCount: number | null
    prizeAmount: number | null
    proofImageUrl: string | null
    status: $Enums.PayoutStatus | null
  }

  export type WinnerCountAggregateOutputType = {
    id: number
    drawId: number
    profileId: number
    matchCount: number
    prizeAmount: number
    proofImageUrl: number
    status: number
    _all: number
  }


  export type WinnerAvgAggregateInputType = {
    matchCount?: true
    prizeAmount?: true
  }

  export type WinnerSumAggregateInputType = {
    matchCount?: true
    prizeAmount?: true
  }

  export type WinnerMinAggregateInputType = {
    id?: true
    drawId?: true
    profileId?: true
    matchCount?: true
    prizeAmount?: true
    proofImageUrl?: true
    status?: true
  }

  export type WinnerMaxAggregateInputType = {
    id?: true
    drawId?: true
    profileId?: true
    matchCount?: true
    prizeAmount?: true
    proofImageUrl?: true
    status?: true
  }

  export type WinnerCountAggregateInputType = {
    id?: true
    drawId?: true
    profileId?: true
    matchCount?: true
    prizeAmount?: true
    proofImageUrl?: true
    status?: true
    _all?: true
  }

  export type WinnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Winner to aggregate.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Winners
    **/
    _count?: true | WinnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WinnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WinnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WinnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WinnerMaxAggregateInputType
  }

  export type GetWinnerAggregateType<T extends WinnerAggregateArgs> = {
        [P in keyof T & keyof AggregateWinner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWinner[P]>
      : GetScalarType<T[P], AggregateWinner[P]>
  }




  export type WinnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithAggregationInput | WinnerOrderByWithAggregationInput[]
    by: WinnerScalarFieldEnum[] | WinnerScalarFieldEnum
    having?: WinnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WinnerCountAggregateInputType | true
    _avg?: WinnerAvgAggregateInputType
    _sum?: WinnerSumAggregateInputType
    _min?: WinnerMinAggregateInputType
    _max?: WinnerMaxAggregateInputType
  }

  export type WinnerGroupByOutputType = {
    id: string
    drawId: string
    profileId: string
    matchCount: number
    prizeAmount: number
    proofImageUrl: string | null
    status: $Enums.PayoutStatus
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  type GetWinnerGroupByPayload<T extends WinnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WinnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WinnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WinnerGroupByOutputType[P]>
            : GetScalarType<T[P], WinnerGroupByOutputType[P]>
        }
      >
    >


  export type WinnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    profileId?: boolean
    matchCount?: boolean
    prizeAmount?: boolean
    proofImageUrl?: boolean
    status?: boolean
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    profileId?: boolean
    matchCount?: boolean
    prizeAmount?: boolean
    proofImageUrl?: boolean
    status?: boolean
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    profileId?: boolean
    matchCount?: boolean
    prizeAmount?: boolean
    proofImageUrl?: boolean
    status?: boolean
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectScalar = {
    id?: boolean
    drawId?: boolean
    profileId?: boolean
    matchCount?: boolean
    prizeAmount?: boolean
    proofImageUrl?: boolean
    status?: boolean
  }

  export type WinnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "drawId" | "profileId" | "matchCount" | "prizeAmount" | "proofImageUrl" | "status", ExtArgs["result"]["winner"]>
  export type WinnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WinnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WinnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $WinnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Winner"
    objects: {
      draw: Prisma.$DrawResultPayload<ExtArgs>
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      drawId: string
      profileId: string
      matchCount: number
      prizeAmount: number
      proofImageUrl: string | null
      status: $Enums.PayoutStatus
    }, ExtArgs["result"]["winner"]>
    composites: {}
  }

  type WinnerGetPayload<S extends boolean | null | undefined | WinnerDefaultArgs> = $Result.GetResult<Prisma.$WinnerPayload, S>

  type WinnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WinnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WinnerCountAggregateInputType | true
    }

  export interface WinnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Winner'], meta: { name: 'Winner' } }
    /**
     * Find zero or one Winner that matches the filter.
     * @param {WinnerFindUniqueArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WinnerFindUniqueArgs>(args: SelectSubset<T, WinnerFindUniqueArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Winner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WinnerFindUniqueOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WinnerFindUniqueOrThrowArgs>(args: SelectSubset<T, WinnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindFirstArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WinnerFindFirstArgs>(args?: SelectSubset<T, WinnerFindFirstArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindFirstOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WinnerFindFirstOrThrowArgs>(args?: SelectSubset<T, WinnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Winners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Winners
     * const winners = await prisma.winner.findMany()
     * 
     * // Get first 10 Winners
     * const winners = await prisma.winner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const winnerWithIdOnly = await prisma.winner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WinnerFindManyArgs>(args?: SelectSubset<T, WinnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Winner.
     * @param {WinnerCreateArgs} args - Arguments to create a Winner.
     * @example
     * // Create one Winner
     * const Winner = await prisma.winner.create({
     *   data: {
     *     // ... data to create a Winner
     *   }
     * })
     * 
     */
    create<T extends WinnerCreateArgs>(args: SelectSubset<T, WinnerCreateArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Winners.
     * @param {WinnerCreateManyArgs} args - Arguments to create many Winners.
     * @example
     * // Create many Winners
     * const winner = await prisma.winner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WinnerCreateManyArgs>(args?: SelectSubset<T, WinnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Winners and returns the data saved in the database.
     * @param {WinnerCreateManyAndReturnArgs} args - Arguments to create many Winners.
     * @example
     * // Create many Winners
     * const winner = await prisma.winner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Winners and only return the `id`
     * const winnerWithIdOnly = await prisma.winner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WinnerCreateManyAndReturnArgs>(args?: SelectSubset<T, WinnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Winner.
     * @param {WinnerDeleteArgs} args - Arguments to delete one Winner.
     * @example
     * // Delete one Winner
     * const Winner = await prisma.winner.delete({
     *   where: {
     *     // ... filter to delete one Winner
     *   }
     * })
     * 
     */
    delete<T extends WinnerDeleteArgs>(args: SelectSubset<T, WinnerDeleteArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Winner.
     * @param {WinnerUpdateArgs} args - Arguments to update one Winner.
     * @example
     * // Update one Winner
     * const winner = await prisma.winner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WinnerUpdateArgs>(args: SelectSubset<T, WinnerUpdateArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Winners.
     * @param {WinnerDeleteManyArgs} args - Arguments to filter Winners to delete.
     * @example
     * // Delete a few Winners
     * const { count } = await prisma.winner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WinnerDeleteManyArgs>(args?: SelectSubset<T, WinnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WinnerUpdateManyArgs>(args: SelectSubset<T, WinnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Winners and returns the data updated in the database.
     * @param {WinnerUpdateManyAndReturnArgs} args - Arguments to update many Winners.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Winners and only return the `id`
     * const winnerWithIdOnly = await prisma.winner.updateManyAndReturn({
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
    updateManyAndReturn<T extends WinnerUpdateManyAndReturnArgs>(args: SelectSubset<T, WinnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Winner.
     * @param {WinnerUpsertArgs} args - Arguments to update or create a Winner.
     * @example
     * // Update or create a Winner
     * const winner = await prisma.winner.upsert({
     *   create: {
     *     // ... data to create a Winner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Winner we want to update
     *   }
     * })
     */
    upsert<T extends WinnerUpsertArgs>(args: SelectSubset<T, WinnerUpsertArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerCountArgs} args - Arguments to filter Winners to count.
     * @example
     * // Count the number of Winners
     * const count = await prisma.winner.count({
     *   where: {
     *     // ... the filter for the Winners we want to count
     *   }
     * })
    **/
    count<T extends WinnerCountArgs>(
      args?: Subset<T, WinnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WinnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WinnerAggregateArgs>(args: Subset<T, WinnerAggregateArgs>): Prisma.PrismaPromise<GetWinnerAggregateType<T>>

    /**
     * Group by Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerGroupByArgs} args - Group by arguments.
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
      T extends WinnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WinnerGroupByArgs['orderBy'] }
        : { orderBy?: WinnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WinnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWinnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Winner model
   */
  readonly fields: WinnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Winner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WinnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    draw<T extends DrawResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrawResultDefaultArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Winner model
   */
  interface WinnerFieldRefs {
    readonly id: FieldRef<"Winner", 'String'>
    readonly drawId: FieldRef<"Winner", 'String'>
    readonly profileId: FieldRef<"Winner", 'String'>
    readonly matchCount: FieldRef<"Winner", 'Int'>
    readonly prizeAmount: FieldRef<"Winner", 'Float'>
    readonly proofImageUrl: FieldRef<"Winner", 'String'>
    readonly status: FieldRef<"Winner", 'PayoutStatus'>
  }
    

  // Custom InputTypes
  /**
   * Winner findUnique
   */
  export type WinnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner findUniqueOrThrow
   */
  export type WinnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner findFirst
   */
  export type WinnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner findFirstOrThrow
   */
  export type WinnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner findMany
   */
  export type WinnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winners to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner create
   */
  export type WinnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Winner.
     */
    data: XOR<WinnerCreateInput, WinnerUncheckedCreateInput>
  }

  /**
   * Winner createMany
   */
  export type WinnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Winners.
     */
    data: WinnerCreateManyInput | WinnerCreateManyInput[]
  }

  /**
   * Winner createManyAndReturn
   */
  export type WinnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * The data used to create many Winners.
     */
    data: WinnerCreateManyInput | WinnerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Winner update
   */
  export type WinnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Winner.
     */
    data: XOR<WinnerUpdateInput, WinnerUncheckedUpdateInput>
    /**
     * Choose, which Winner to update.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner updateMany
   */
  export type WinnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Winners.
     */
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyInput>
    /**
     * Filter which Winners to update
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to update.
     */
    limit?: number
  }

  /**
   * Winner updateManyAndReturn
   */
  export type WinnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * The data used to update Winners.
     */
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyInput>
    /**
     * Filter which Winners to update
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Winner upsert
   */
  export type WinnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Winner to update in case it exists.
     */
    where: WinnerWhereUniqueInput
    /**
     * In case the Winner found by the `where` argument doesn't exist, create a new Winner with this data.
     */
    create: XOR<WinnerCreateInput, WinnerUncheckedCreateInput>
    /**
     * In case the Winner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WinnerUpdateInput, WinnerUncheckedUpdateInput>
  }

  /**
   * Winner delete
   */
  export type WinnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter which Winner to delete.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner deleteMany
   */
  export type WinnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Winners to delete
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to delete.
     */
    limit?: number
  }

  /**
   * Winner without action
   */
  export type WinnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    subscriptionStatus: 'subscriptionStatus',
    stripeCustomerId: 'stripeCustomerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    selectedCharityId: 'selectedCharityId',
    charityPercentage: 'charityPercentage'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ScoreScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    value: 'value',
    datePlayed: 'datePlayed',
    createdAt: 'createdAt'
  };

  export type ScoreScalarFieldEnum = (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum]


  export const CharityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type CharityScalarFieldEnum = (typeof CharityScalarFieldEnum)[keyof typeof CharityScalarFieldEnum]


  export const DrawResultScalarFieldEnum: {
    id: 'id',
    monthYear: 'monthYear',
    poolTotal: 'poolTotal',
    winningNumbers: 'winningNumbers',
    status: 'status',
    createdAt: 'createdAt',
    executedAt: 'executedAt'
  };

  export type DrawResultScalarFieldEnum = (typeof DrawResultScalarFieldEnum)[keyof typeof DrawResultScalarFieldEnum]


  export const DrawParticipantScalarFieldEnum: {
    id: 'id',
    drawId: 'drawId',
    profileId: 'profileId',
    lockedScores: 'lockedScores'
  };

  export type DrawParticipantScalarFieldEnum = (typeof DrawParticipantScalarFieldEnum)[keyof typeof DrawParticipantScalarFieldEnum]


  export const WinnerScalarFieldEnum: {
    id: 'id',
    drawId: 'drawId',
    profileId: 'profileId',
    matchCount: 'matchCount',
    prizeAmount: 'prizeAmount',
    proofImageUrl: 'proofImageUrl',
    status: 'status'
  };

  export type WinnerScalarFieldEnum = (typeof WinnerScalarFieldEnum)[keyof typeof WinnerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'SubStatus'
   */
  export type EnumSubStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DrawState'
   */
  export type EnumDrawStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DrawState'>
    


  /**
   * Reference to a field of type 'PayoutStatus'
   */
  export type EnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    firstName?: StringNullableFilter<"Profile"> | string | null
    lastName?: StringNullableFilter<"Profile"> | string | null
    role?: EnumRoleFilter<"Profile"> | $Enums.Role
    subscriptionStatus?: EnumSubStatusFilter<"Profile"> | $Enums.SubStatus
    stripeCustomerId?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    selectedCharityId?: StringNullableFilter<"Profile"> | string | null
    charityPercentage?: FloatFilter<"Profile"> | number
    scores?: ScoreListRelationFilter
    drawParticipations?: DrawParticipantListRelationFilter
    winnings?: WinnerListRelationFilter
    selectedCharity?: XOR<CharityNullableScalarRelationFilter, CharityWhereInput> | null
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    selectedCharityId?: SortOrderInput | SortOrder
    charityPercentage?: SortOrder
    scores?: ScoreOrderByRelationAggregateInput
    drawParticipations?: DrawParticipantOrderByRelationAggregateInput
    winnings?: WinnerOrderByRelationAggregateInput
    selectedCharity?: CharityOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    stripeCustomerId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    firstName?: StringNullableFilter<"Profile"> | string | null
    lastName?: StringNullableFilter<"Profile"> | string | null
    role?: EnumRoleFilter<"Profile"> | $Enums.Role
    subscriptionStatus?: EnumSubStatusFilter<"Profile"> | $Enums.SubStatus
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    selectedCharityId?: StringNullableFilter<"Profile"> | string | null
    charityPercentage?: FloatFilter<"Profile"> | number
    scores?: ScoreListRelationFilter
    drawParticipations?: DrawParticipantListRelationFilter
    winnings?: WinnerListRelationFilter
    selectedCharity?: XOR<CharityNullableScalarRelationFilter, CharityWhereInput> | null
  }, "id" | "email" | "stripeCustomerId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    selectedCharityId?: SortOrderInput | SortOrder
    charityPercentage?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    email?: StringWithAggregatesFilter<"Profile"> | string
    firstName?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Profile"> | $Enums.Role
    subscriptionStatus?: EnumSubStatusWithAggregatesFilter<"Profile"> | $Enums.SubStatus
    stripeCustomerId?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    selectedCharityId?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    charityPercentage?: FloatWithAggregatesFilter<"Profile"> | number
  }

  export type ScoreWhereInput = {
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    id?: StringFilter<"Score"> | string
    profileId?: StringFilter<"Score"> | string
    value?: IntFilter<"Score"> | number
    datePlayed?: DateTimeFilter<"Score"> | Date | string
    createdAt?: DateTimeFilter<"Score"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type ScoreOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    value?: SortOrder
    datePlayed?: SortOrder
    createdAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type ScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    profileId?: StringFilter<"Score"> | string
    value?: IntFilter<"Score"> | number
    datePlayed?: DateTimeFilter<"Score"> | Date | string
    createdAt?: DateTimeFilter<"Score"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type ScoreOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    value?: SortOrder
    datePlayed?: SortOrder
    createdAt?: SortOrder
    _count?: ScoreCountOrderByAggregateInput
    _avg?: ScoreAvgOrderByAggregateInput
    _max?: ScoreMaxOrderByAggregateInput
    _min?: ScoreMinOrderByAggregateInput
    _sum?: ScoreSumOrderByAggregateInput
  }

  export type ScoreScalarWhereWithAggregatesInput = {
    AND?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    OR?: ScoreScalarWhereWithAggregatesInput[]
    NOT?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Score"> | string
    profileId?: StringWithAggregatesFilter<"Score"> | string
    value?: IntWithAggregatesFilter<"Score"> | number
    datePlayed?: DateTimeWithAggregatesFilter<"Score"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Score"> | Date | string
  }

  export type CharityWhereInput = {
    AND?: CharityWhereInput | CharityWhereInput[]
    OR?: CharityWhereInput[]
    NOT?: CharityWhereInput | CharityWhereInput[]
    id?: StringFilter<"Charity"> | string
    name?: StringFilter<"Charity"> | string
    description?: StringFilter<"Charity"> | string
    imageUrl?: StringNullableFilter<"Charity"> | string | null
    isActive?: BoolFilter<"Charity"> | boolean
    createdAt?: DateTimeFilter<"Charity"> | Date | string
    supporters?: ProfileListRelationFilter
  }

  export type CharityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    supporters?: ProfileOrderByRelationAggregateInput
  }

  export type CharityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CharityWhereInput | CharityWhereInput[]
    OR?: CharityWhereInput[]
    NOT?: CharityWhereInput | CharityWhereInput[]
    name?: StringFilter<"Charity"> | string
    description?: StringFilter<"Charity"> | string
    imageUrl?: StringNullableFilter<"Charity"> | string | null
    isActive?: BoolFilter<"Charity"> | boolean
    createdAt?: DateTimeFilter<"Charity"> | Date | string
    supporters?: ProfileListRelationFilter
  }, "id">

  export type CharityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: CharityCountOrderByAggregateInput
    _max?: CharityMaxOrderByAggregateInput
    _min?: CharityMinOrderByAggregateInput
  }

  export type CharityScalarWhereWithAggregatesInput = {
    AND?: CharityScalarWhereWithAggregatesInput | CharityScalarWhereWithAggregatesInput[]
    OR?: CharityScalarWhereWithAggregatesInput[]
    NOT?: CharityScalarWhereWithAggregatesInput | CharityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Charity"> | string
    name?: StringWithAggregatesFilter<"Charity"> | string
    description?: StringWithAggregatesFilter<"Charity"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Charity"> | string | null
    isActive?: BoolWithAggregatesFilter<"Charity"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Charity"> | Date | string
  }

  export type DrawResultWhereInput = {
    AND?: DrawResultWhereInput | DrawResultWhereInput[]
    OR?: DrawResultWhereInput[]
    NOT?: DrawResultWhereInput | DrawResultWhereInput[]
    id?: StringFilter<"DrawResult"> | string
    monthYear?: StringFilter<"DrawResult"> | string
    poolTotal?: FloatFilter<"DrawResult"> | number
    winningNumbers?: StringFilter<"DrawResult"> | string
    status?: EnumDrawStateFilter<"DrawResult"> | $Enums.DrawState
    createdAt?: DateTimeFilter<"DrawResult"> | Date | string
    executedAt?: DateTimeNullableFilter<"DrawResult"> | Date | string | null
    winners?: WinnerListRelationFilter
    participants?: DrawParticipantListRelationFilter
  }

  export type DrawResultOrderByWithRelationInput = {
    id?: SortOrder
    monthYear?: SortOrder
    poolTotal?: SortOrder
    winningNumbers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    executedAt?: SortOrderInput | SortOrder
    winners?: WinnerOrderByRelationAggregateInput
    participants?: DrawParticipantOrderByRelationAggregateInput
  }

  export type DrawResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    monthYear?: string
    AND?: DrawResultWhereInput | DrawResultWhereInput[]
    OR?: DrawResultWhereInput[]
    NOT?: DrawResultWhereInput | DrawResultWhereInput[]
    poolTotal?: FloatFilter<"DrawResult"> | number
    winningNumbers?: StringFilter<"DrawResult"> | string
    status?: EnumDrawStateFilter<"DrawResult"> | $Enums.DrawState
    createdAt?: DateTimeFilter<"DrawResult"> | Date | string
    executedAt?: DateTimeNullableFilter<"DrawResult"> | Date | string | null
    winners?: WinnerListRelationFilter
    participants?: DrawParticipantListRelationFilter
  }, "id" | "monthYear">

  export type DrawResultOrderByWithAggregationInput = {
    id?: SortOrder
    monthYear?: SortOrder
    poolTotal?: SortOrder
    winningNumbers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    executedAt?: SortOrderInput | SortOrder
    _count?: DrawResultCountOrderByAggregateInput
    _avg?: DrawResultAvgOrderByAggregateInput
    _max?: DrawResultMaxOrderByAggregateInput
    _min?: DrawResultMinOrderByAggregateInput
    _sum?: DrawResultSumOrderByAggregateInput
  }

  export type DrawResultScalarWhereWithAggregatesInput = {
    AND?: DrawResultScalarWhereWithAggregatesInput | DrawResultScalarWhereWithAggregatesInput[]
    OR?: DrawResultScalarWhereWithAggregatesInput[]
    NOT?: DrawResultScalarWhereWithAggregatesInput | DrawResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DrawResult"> | string
    monthYear?: StringWithAggregatesFilter<"DrawResult"> | string
    poolTotal?: FloatWithAggregatesFilter<"DrawResult"> | number
    winningNumbers?: StringWithAggregatesFilter<"DrawResult"> | string
    status?: EnumDrawStateWithAggregatesFilter<"DrawResult"> | $Enums.DrawState
    createdAt?: DateTimeWithAggregatesFilter<"DrawResult"> | Date | string
    executedAt?: DateTimeNullableWithAggregatesFilter<"DrawResult"> | Date | string | null
  }

  export type DrawParticipantWhereInput = {
    AND?: DrawParticipantWhereInput | DrawParticipantWhereInput[]
    OR?: DrawParticipantWhereInput[]
    NOT?: DrawParticipantWhereInput | DrawParticipantWhereInput[]
    id?: StringFilter<"DrawParticipant"> | string
    drawId?: StringFilter<"DrawParticipant"> | string
    profileId?: StringFilter<"DrawParticipant"> | string
    lockedScores?: StringFilter<"DrawParticipant"> | string
    draw?: XOR<DrawResultScalarRelationFilter, DrawResultWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type DrawParticipantOrderByWithRelationInput = {
    id?: SortOrder
    drawId?: SortOrder
    profileId?: SortOrder
    lockedScores?: SortOrder
    draw?: DrawResultOrderByWithRelationInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type DrawParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DrawParticipantWhereInput | DrawParticipantWhereInput[]
    OR?: DrawParticipantWhereInput[]
    NOT?: DrawParticipantWhereInput | DrawParticipantWhereInput[]
    drawId?: StringFilter<"DrawParticipant"> | string
    profileId?: StringFilter<"DrawParticipant"> | string
    lockedScores?: StringFilter<"DrawParticipant"> | string
    draw?: XOR<DrawResultScalarRelationFilter, DrawResultWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type DrawParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    drawId?: SortOrder
    profileId?: SortOrder
    lockedScores?: SortOrder
    _count?: DrawParticipantCountOrderByAggregateInput
    _max?: DrawParticipantMaxOrderByAggregateInput
    _min?: DrawParticipantMinOrderByAggregateInput
  }

  export type DrawParticipantScalarWhereWithAggregatesInput = {
    AND?: DrawParticipantScalarWhereWithAggregatesInput | DrawParticipantScalarWhereWithAggregatesInput[]
    OR?: DrawParticipantScalarWhereWithAggregatesInput[]
    NOT?: DrawParticipantScalarWhereWithAggregatesInput | DrawParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DrawParticipant"> | string
    drawId?: StringWithAggregatesFilter<"DrawParticipant"> | string
    profileId?: StringWithAggregatesFilter<"DrawParticipant"> | string
    lockedScores?: StringWithAggregatesFilter<"DrawParticipant"> | string
  }

  export type WinnerWhereInput = {
    AND?: WinnerWhereInput | WinnerWhereInput[]
    OR?: WinnerWhereInput[]
    NOT?: WinnerWhereInput | WinnerWhereInput[]
    id?: StringFilter<"Winner"> | string
    drawId?: StringFilter<"Winner"> | string
    profileId?: StringFilter<"Winner"> | string
    matchCount?: IntFilter<"Winner"> | number
    prizeAmount?: FloatFilter<"Winner"> | number
    proofImageUrl?: StringNullableFilter<"Winner"> | string | null
    status?: EnumPayoutStatusFilter<"Winner"> | $Enums.PayoutStatus
    draw?: XOR<DrawResultScalarRelationFilter, DrawResultWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type WinnerOrderByWithRelationInput = {
    id?: SortOrder
    drawId?: SortOrder
    profileId?: SortOrder
    matchCount?: SortOrder
    prizeAmount?: SortOrder
    proofImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    draw?: DrawResultOrderByWithRelationInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type WinnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WinnerWhereInput | WinnerWhereInput[]
    OR?: WinnerWhereInput[]
    NOT?: WinnerWhereInput | WinnerWhereInput[]
    drawId?: StringFilter<"Winner"> | string
    profileId?: StringFilter<"Winner"> | string
    matchCount?: IntFilter<"Winner"> | number
    prizeAmount?: FloatFilter<"Winner"> | number
    proofImageUrl?: StringNullableFilter<"Winner"> | string | null
    status?: EnumPayoutStatusFilter<"Winner"> | $Enums.PayoutStatus
    draw?: XOR<DrawResultScalarRelationFilter, DrawResultWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type WinnerOrderByWithAggregationInput = {
    id?: SortOrder
    drawId?: SortOrder
    profileId?: SortOrder
    matchCount?: SortOrder
    prizeAmount?: SortOrder
    proofImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: WinnerCountOrderByAggregateInput
    _avg?: WinnerAvgOrderByAggregateInput
    _max?: WinnerMaxOrderByAggregateInput
    _min?: WinnerMinOrderByAggregateInput
    _sum?: WinnerSumOrderByAggregateInput
  }

  export type WinnerScalarWhereWithAggregatesInput = {
    AND?: WinnerScalarWhereWithAggregatesInput | WinnerScalarWhereWithAggregatesInput[]
    OR?: WinnerScalarWhereWithAggregatesInput[]
    NOT?: WinnerScalarWhereWithAggregatesInput | WinnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Winner"> | string
    drawId?: StringWithAggregatesFilter<"Winner"> | string
    profileId?: StringWithAggregatesFilter<"Winner"> | string
    matchCount?: IntWithAggregatesFilter<"Winner"> | number
    prizeAmount?: FloatWithAggregatesFilter<"Winner"> | number
    proofImageUrl?: StringNullableWithAggregatesFilter<"Winner"> | string | null
    status?: EnumPayoutStatusWithAggregatesFilter<"Winner"> | $Enums.PayoutStatus
  }

  export type ProfileCreateInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    charityPercentage?: number
    scores?: ScoreCreateNestedManyWithoutProfileInput
    drawParticipations?: DrawParticipantCreateNestedManyWithoutProfileInput
    winnings?: WinnerCreateNestedManyWithoutProfileInput
    selectedCharity?: CharityCreateNestedOneWithoutSupportersInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedCharityId?: string | null
    charityPercentage?: number
    scores?: ScoreUncheckedCreateNestedManyWithoutProfileInput
    drawParticipations?: DrawParticipantUncheckedCreateNestedManyWithoutProfileInput
    winnings?: WinnerUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charityPercentage?: FloatFieldUpdateOperationsInput | number
    scores?: ScoreUpdateManyWithoutProfileNestedInput
    drawParticipations?: DrawParticipantUpdateManyWithoutProfileNestedInput
    winnings?: WinnerUpdateManyWithoutProfileNestedInput
    selectedCharity?: CharityUpdateOneWithoutSupportersNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedCharityId?: NullableStringFieldUpdateOperationsInput | string | null
    charityPercentage?: FloatFieldUpdateOperationsInput | number
    scores?: ScoreUncheckedUpdateManyWithoutProfileNestedInput
    drawParticipations?: DrawParticipantUncheckedUpdateManyWithoutProfileNestedInput
    winnings?: WinnerUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedCharityId?: string | null
    charityPercentage?: number
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charityPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedCharityId?: NullableStringFieldUpdateOperationsInput | string | null
    charityPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type ScoreCreateInput = {
    id?: string
    value: number
    datePlayed: Date | string
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateInput = {
    id?: string
    profileId: string
    value: number
    datePlayed: Date | string
    createdAt?: Date | string
  }

  export type ScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreCreateManyInput = {
    id?: string
    profileId: string
    value: number
    datePlayed: Date | string
    createdAt?: Date | string
  }

  export type ScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    supporters?: ProfileCreateNestedManyWithoutSelectedCharityInput
  }

  export type CharityUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    supporters?: ProfileUncheckedCreateNestedManyWithoutSelectedCharityInput
  }

  export type CharityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supporters?: ProfileUpdateManyWithoutSelectedCharityNestedInput
  }

  export type CharityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supporters?: ProfileUncheckedUpdateManyWithoutSelectedCharityNestedInput
  }

  export type CharityCreateManyInput = {
    id?: string
    name: string
    description: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type CharityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawResultCreateInput = {
    id?: string
    monthYear: string
    poolTotal: number
    winningNumbers: string
    status?: $Enums.DrawState
    createdAt?: Date | string
    executedAt?: Date | string | null
    winners?: WinnerCreateNestedManyWithoutDrawInput
    participants?: DrawParticipantCreateNestedManyWithoutDrawInput
  }

  export type DrawResultUncheckedCreateInput = {
    id?: string
    monthYear: string
    poolTotal: number
    winningNumbers: string
    status?: $Enums.DrawState
    createdAt?: Date | string
    executedAt?: Date | string | null
    winners?: WinnerUncheckedCreateNestedManyWithoutDrawInput
    participants?: DrawParticipantUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthYear?: StringFieldUpdateOperationsInput | string
    poolTotal?: FloatFieldUpdateOperationsInput | number
    winningNumbers?: StringFieldUpdateOperationsInput | string
    status?: EnumDrawStateFieldUpdateOperationsInput | $Enums.DrawState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winners?: WinnerUpdateManyWithoutDrawNestedInput
    participants?: DrawParticipantUpdateManyWithoutDrawNestedInput
  }

  export type DrawResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthYear?: StringFieldUpdateOperationsInput | string
    poolTotal?: FloatFieldUpdateOperationsInput | number
    winningNumbers?: StringFieldUpdateOperationsInput | string
    status?: EnumDrawStateFieldUpdateOperationsInput | $Enums.DrawState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winners?: WinnerUncheckedUpdateManyWithoutDrawNestedInput
    participants?: DrawParticipantUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type DrawResultCreateManyInput = {
    id?: string
    monthYear: string
    poolTotal: number
    winningNumbers: string
    status?: $Enums.DrawState
    createdAt?: Date | string
    executedAt?: Date | string | null
  }

  export type DrawResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthYear?: StringFieldUpdateOperationsInput | string
    poolTotal?: FloatFieldUpdateOperationsInput | number
    winningNumbers?: StringFieldUpdateOperationsInput | string
    status?: EnumDrawStateFieldUpdateOperationsInput | $Enums.DrawState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DrawResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthYear?: StringFieldUpdateOperationsInput | string
    poolTotal?: FloatFieldUpdateOperationsInput | number
    winningNumbers?: StringFieldUpdateOperationsInput | string
    status?: EnumDrawStateFieldUpdateOperationsInput | $Enums.DrawState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DrawParticipantCreateInput = {
    id?: string
    lockedScores: string
    draw: DrawResultCreateNestedOneWithoutParticipantsInput
    profile: ProfileCreateNestedOneWithoutDrawParticipationsInput
  }

  export type DrawParticipantUncheckedCreateInput = {
    id?: string
    drawId: string
    profileId: string
    lockedScores: string
  }

  export type DrawParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lockedScores?: StringFieldUpdateOperationsInput | string
    draw?: DrawResultUpdateOneRequiredWithoutParticipantsNestedInput
    profile?: ProfileUpdateOneRequiredWithoutDrawParticipationsNestedInput
  }

  export type DrawParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    lockedScores?: StringFieldUpdateOperationsInput | string
  }

  export type DrawParticipantCreateManyInput = {
    id?: string
    drawId: string
    profileId: string
    lockedScores: string
  }

  export type DrawParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lockedScores?: StringFieldUpdateOperationsInput | string
  }

  export type DrawParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    lockedScores?: StringFieldUpdateOperationsInput | string
  }

  export type WinnerCreateInput = {
    id?: string
    matchCount: number
    prizeAmount: number
    proofImageUrl?: string | null
    status?: $Enums.PayoutStatus
    draw: DrawResultCreateNestedOneWithoutWinnersInput
    profile: ProfileCreateNestedOneWithoutWinningsInput
  }

  export type WinnerUncheckedCreateInput = {
    id?: string
    drawId: string
    profileId: string
    matchCount: number
    prizeAmount: number
    proofImageUrl?: string | null
    status?: $Enums.PayoutStatus
  }

  export type WinnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchCount?: IntFieldUpdateOperationsInput | number
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    draw?: DrawResultUpdateOneRequiredWithoutWinnersNestedInput
    profile?: ProfileUpdateOneRequiredWithoutWinningsNestedInput
  }

  export type WinnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    matchCount?: IntFieldUpdateOperationsInput | number
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
  }

  export type WinnerCreateManyInput = {
    id?: string
    drawId: string
    profileId: string
    matchCount: number
    prizeAmount: number
    proofImageUrl?: string | null
    status?: $Enums.PayoutStatus
  }

  export type WinnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchCount?: IntFieldUpdateOperationsInput | number
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
  }

  export type WinnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    matchCount?: IntFieldUpdateOperationsInput | number
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumSubStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubStatus | EnumSubStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubStatus[]
    notIn?: $Enums.SubStatus[]
    not?: NestedEnumSubStatusFilter<$PrismaModel> | $Enums.SubStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ScoreListRelationFilter = {
    every?: ScoreWhereInput
    some?: ScoreWhereInput
    none?: ScoreWhereInput
  }

  export type DrawParticipantListRelationFilter = {
    every?: DrawParticipantWhereInput
    some?: DrawParticipantWhereInput
    none?: DrawParticipantWhereInput
  }

  export type WinnerListRelationFilter = {
    every?: WinnerWhereInput
    some?: WinnerWhereInput
    none?: WinnerWhereInput
  }

  export type CharityNullableScalarRelationFilter = {
    is?: CharityWhereInput | null
    isNot?: CharityWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrawParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WinnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    selectedCharityId?: SortOrder
    charityPercentage?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    charityPercentage?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    selectedCharityId?: SortOrder
    charityPercentage?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    selectedCharityId?: SortOrder
    charityPercentage?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    charityPercentage?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumSubStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubStatus | EnumSubStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubStatus[]
    notIn?: $Enums.SubStatus[]
    not?: NestedEnumSubStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubStatusFilter<$PrismaModel>
    _max?: NestedEnumSubStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type ScoreCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    value?: SortOrder
    datePlayed?: SortOrder
    createdAt?: SortOrder
  }

  export type ScoreAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    value?: SortOrder
    datePlayed?: SortOrder
    createdAt?: SortOrder
  }

  export type ScoreMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    value?: SortOrder
    datePlayed?: SortOrder
    createdAt?: SortOrder
  }

  export type ScoreSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type CharityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type CharityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDrawStateFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawState | EnumDrawStateFieldRefInput<$PrismaModel>
    in?: $Enums.DrawState[]
    notIn?: $Enums.DrawState[]
    not?: NestedEnumDrawStateFilter<$PrismaModel> | $Enums.DrawState
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DrawResultCountOrderByAggregateInput = {
    id?: SortOrder
    monthYear?: SortOrder
    poolTotal?: SortOrder
    winningNumbers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    executedAt?: SortOrder
  }

  export type DrawResultAvgOrderByAggregateInput = {
    poolTotal?: SortOrder
  }

  export type DrawResultMaxOrderByAggregateInput = {
    id?: SortOrder
    monthYear?: SortOrder
    poolTotal?: SortOrder
    winningNumbers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    executedAt?: SortOrder
  }

  export type DrawResultMinOrderByAggregateInput = {
    id?: SortOrder
    monthYear?: SortOrder
    poolTotal?: SortOrder
    winningNumbers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    executedAt?: SortOrder
  }

  export type DrawResultSumOrderByAggregateInput = {
    poolTotal?: SortOrder
  }

  export type EnumDrawStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawState | EnumDrawStateFieldRefInput<$PrismaModel>
    in?: $Enums.DrawState[]
    notIn?: $Enums.DrawState[]
    not?: NestedEnumDrawStateWithAggregatesFilter<$PrismaModel> | $Enums.DrawState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrawStateFilter<$PrismaModel>
    _max?: NestedEnumDrawStateFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DrawResultScalarRelationFilter = {
    is?: DrawResultWhereInput
    isNot?: DrawResultWhereInput
  }

  export type DrawParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    profileId?: SortOrder
    lockedScores?: SortOrder
  }

  export type DrawParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    profileId?: SortOrder
    lockedScores?: SortOrder
  }

  export type DrawParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    profileId?: SortOrder
    lockedScores?: SortOrder
  }

  export type EnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[]
    notIn?: $Enums.PayoutStatus[]
    not?: NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus
  }

  export type WinnerCountOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    profileId?: SortOrder
    matchCount?: SortOrder
    prizeAmount?: SortOrder
    proofImageUrl?: SortOrder
    status?: SortOrder
  }

  export type WinnerAvgOrderByAggregateInput = {
    matchCount?: SortOrder
    prizeAmount?: SortOrder
  }

  export type WinnerMaxOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    profileId?: SortOrder
    matchCount?: SortOrder
    prizeAmount?: SortOrder
    proofImageUrl?: SortOrder
    status?: SortOrder
  }

  export type WinnerMinOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    profileId?: SortOrder
    matchCount?: SortOrder
    prizeAmount?: SortOrder
    proofImageUrl?: SortOrder
    status?: SortOrder
  }

  export type WinnerSumOrderByAggregateInput = {
    matchCount?: SortOrder
    prizeAmount?: SortOrder
  }

  export type EnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[]
    notIn?: $Enums.PayoutStatus[]
    not?: NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutStatusFilter<$PrismaModel>
    _max?: NestedEnumPayoutStatusFilter<$PrismaModel>
  }

  export type ScoreCreateNestedManyWithoutProfileInput = {
    create?: XOR<ScoreCreateWithoutProfileInput, ScoreUncheckedCreateWithoutProfileInput> | ScoreCreateWithoutProfileInput[] | ScoreUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutProfileInput | ScoreCreateOrConnectWithoutProfileInput[]
    createMany?: ScoreCreateManyProfileInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type DrawParticipantCreateNestedManyWithoutProfileInput = {
    create?: XOR<DrawParticipantCreateWithoutProfileInput, DrawParticipantUncheckedCreateWithoutProfileInput> | DrawParticipantCreateWithoutProfileInput[] | DrawParticipantUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: DrawParticipantCreateOrConnectWithoutProfileInput | DrawParticipantCreateOrConnectWithoutProfileInput[]
    createMany?: DrawParticipantCreateManyProfileInputEnvelope
    connect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
  }

  export type WinnerCreateNestedManyWithoutProfileInput = {
    create?: XOR<WinnerCreateWithoutProfileInput, WinnerUncheckedCreateWithoutProfileInput> | WinnerCreateWithoutProfileInput[] | WinnerUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutProfileInput | WinnerCreateOrConnectWithoutProfileInput[]
    createMany?: WinnerCreateManyProfileInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type CharityCreateNestedOneWithoutSupportersInput = {
    create?: XOR<CharityCreateWithoutSupportersInput, CharityUncheckedCreateWithoutSupportersInput>
    connectOrCreate?: CharityCreateOrConnectWithoutSupportersInput
    connect?: CharityWhereUniqueInput
  }

  export type ScoreUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ScoreCreateWithoutProfileInput, ScoreUncheckedCreateWithoutProfileInput> | ScoreCreateWithoutProfileInput[] | ScoreUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutProfileInput | ScoreCreateOrConnectWithoutProfileInput[]
    createMany?: ScoreCreateManyProfileInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type DrawParticipantUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<DrawParticipantCreateWithoutProfileInput, DrawParticipantUncheckedCreateWithoutProfileInput> | DrawParticipantCreateWithoutProfileInput[] | DrawParticipantUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: DrawParticipantCreateOrConnectWithoutProfileInput | DrawParticipantCreateOrConnectWithoutProfileInput[]
    createMany?: DrawParticipantCreateManyProfileInputEnvelope
    connect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
  }

  export type WinnerUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<WinnerCreateWithoutProfileInput, WinnerUncheckedCreateWithoutProfileInput> | WinnerCreateWithoutProfileInput[] | WinnerUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutProfileInput | WinnerCreateOrConnectWithoutProfileInput[]
    createMany?: WinnerCreateManyProfileInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumSubStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScoreUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ScoreCreateWithoutProfileInput, ScoreUncheckedCreateWithoutProfileInput> | ScoreCreateWithoutProfileInput[] | ScoreUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutProfileInput | ScoreCreateOrConnectWithoutProfileInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutProfileInput | ScoreUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ScoreCreateManyProfileInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutProfileInput | ScoreUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutProfileInput | ScoreUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type DrawParticipantUpdateManyWithoutProfileNestedInput = {
    create?: XOR<DrawParticipantCreateWithoutProfileInput, DrawParticipantUncheckedCreateWithoutProfileInput> | DrawParticipantCreateWithoutProfileInput[] | DrawParticipantUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: DrawParticipantCreateOrConnectWithoutProfileInput | DrawParticipantCreateOrConnectWithoutProfileInput[]
    upsert?: DrawParticipantUpsertWithWhereUniqueWithoutProfileInput | DrawParticipantUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: DrawParticipantCreateManyProfileInputEnvelope
    set?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    disconnect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    delete?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    connect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    update?: DrawParticipantUpdateWithWhereUniqueWithoutProfileInput | DrawParticipantUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: DrawParticipantUpdateManyWithWhereWithoutProfileInput | DrawParticipantUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: DrawParticipantScalarWhereInput | DrawParticipantScalarWhereInput[]
  }

  export type WinnerUpdateManyWithoutProfileNestedInput = {
    create?: XOR<WinnerCreateWithoutProfileInput, WinnerUncheckedCreateWithoutProfileInput> | WinnerCreateWithoutProfileInput[] | WinnerUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutProfileInput | WinnerCreateOrConnectWithoutProfileInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutProfileInput | WinnerUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: WinnerCreateManyProfileInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutProfileInput | WinnerUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutProfileInput | WinnerUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type CharityUpdateOneWithoutSupportersNestedInput = {
    create?: XOR<CharityCreateWithoutSupportersInput, CharityUncheckedCreateWithoutSupportersInput>
    connectOrCreate?: CharityCreateOrConnectWithoutSupportersInput
    upsert?: CharityUpsertWithoutSupportersInput
    disconnect?: CharityWhereInput | boolean
    delete?: CharityWhereInput | boolean
    connect?: CharityWhereUniqueInput
    update?: XOR<XOR<CharityUpdateToOneWithWhereWithoutSupportersInput, CharityUpdateWithoutSupportersInput>, CharityUncheckedUpdateWithoutSupportersInput>
  }

  export type ScoreUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ScoreCreateWithoutProfileInput, ScoreUncheckedCreateWithoutProfileInput> | ScoreCreateWithoutProfileInput[] | ScoreUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutProfileInput | ScoreCreateOrConnectWithoutProfileInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutProfileInput | ScoreUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ScoreCreateManyProfileInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutProfileInput | ScoreUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutProfileInput | ScoreUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type DrawParticipantUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<DrawParticipantCreateWithoutProfileInput, DrawParticipantUncheckedCreateWithoutProfileInput> | DrawParticipantCreateWithoutProfileInput[] | DrawParticipantUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: DrawParticipantCreateOrConnectWithoutProfileInput | DrawParticipantCreateOrConnectWithoutProfileInput[]
    upsert?: DrawParticipantUpsertWithWhereUniqueWithoutProfileInput | DrawParticipantUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: DrawParticipantCreateManyProfileInputEnvelope
    set?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    disconnect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    delete?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    connect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    update?: DrawParticipantUpdateWithWhereUniqueWithoutProfileInput | DrawParticipantUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: DrawParticipantUpdateManyWithWhereWithoutProfileInput | DrawParticipantUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: DrawParticipantScalarWhereInput | DrawParticipantScalarWhereInput[]
  }

  export type WinnerUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<WinnerCreateWithoutProfileInput, WinnerUncheckedCreateWithoutProfileInput> | WinnerCreateWithoutProfileInput[] | WinnerUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutProfileInput | WinnerCreateOrConnectWithoutProfileInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutProfileInput | WinnerUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: WinnerCreateManyProfileInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutProfileInput | WinnerUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutProfileInput | WinnerUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutScoresInput = {
    create?: XOR<ProfileCreateWithoutScoresInput, ProfileUncheckedCreateWithoutScoresInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutScoresInput
    connect?: ProfileWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<ProfileCreateWithoutScoresInput, ProfileUncheckedCreateWithoutScoresInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutScoresInput
    upsert?: ProfileUpsertWithoutScoresInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutScoresInput, ProfileUpdateWithoutScoresInput>, ProfileUncheckedUpdateWithoutScoresInput>
  }

  export type ProfileCreateNestedManyWithoutSelectedCharityInput = {
    create?: XOR<ProfileCreateWithoutSelectedCharityInput, ProfileUncheckedCreateWithoutSelectedCharityInput> | ProfileCreateWithoutSelectedCharityInput[] | ProfileUncheckedCreateWithoutSelectedCharityInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutSelectedCharityInput | ProfileCreateOrConnectWithoutSelectedCharityInput[]
    createMany?: ProfileCreateManySelectedCharityInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutSelectedCharityInput = {
    create?: XOR<ProfileCreateWithoutSelectedCharityInput, ProfileUncheckedCreateWithoutSelectedCharityInput> | ProfileCreateWithoutSelectedCharityInput[] | ProfileUncheckedCreateWithoutSelectedCharityInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutSelectedCharityInput | ProfileCreateOrConnectWithoutSelectedCharityInput[]
    createMany?: ProfileCreateManySelectedCharityInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProfileUpdateManyWithoutSelectedCharityNestedInput = {
    create?: XOR<ProfileCreateWithoutSelectedCharityInput, ProfileUncheckedCreateWithoutSelectedCharityInput> | ProfileCreateWithoutSelectedCharityInput[] | ProfileUncheckedCreateWithoutSelectedCharityInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutSelectedCharityInput | ProfileCreateOrConnectWithoutSelectedCharityInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutSelectedCharityInput | ProfileUpsertWithWhereUniqueWithoutSelectedCharityInput[]
    createMany?: ProfileCreateManySelectedCharityInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutSelectedCharityInput | ProfileUpdateWithWhereUniqueWithoutSelectedCharityInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutSelectedCharityInput | ProfileUpdateManyWithWhereWithoutSelectedCharityInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateManyWithoutSelectedCharityNestedInput = {
    create?: XOR<ProfileCreateWithoutSelectedCharityInput, ProfileUncheckedCreateWithoutSelectedCharityInput> | ProfileCreateWithoutSelectedCharityInput[] | ProfileUncheckedCreateWithoutSelectedCharityInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutSelectedCharityInput | ProfileCreateOrConnectWithoutSelectedCharityInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutSelectedCharityInput | ProfileUpsertWithWhereUniqueWithoutSelectedCharityInput[]
    createMany?: ProfileCreateManySelectedCharityInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutSelectedCharityInput | ProfileUpdateWithWhereUniqueWithoutSelectedCharityInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutSelectedCharityInput | ProfileUpdateManyWithWhereWithoutSelectedCharityInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type WinnerCreateNestedManyWithoutDrawInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type DrawParticipantCreateNestedManyWithoutDrawInput = {
    create?: XOR<DrawParticipantCreateWithoutDrawInput, DrawParticipantUncheckedCreateWithoutDrawInput> | DrawParticipantCreateWithoutDrawInput[] | DrawParticipantUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: DrawParticipantCreateOrConnectWithoutDrawInput | DrawParticipantCreateOrConnectWithoutDrawInput[]
    createMany?: DrawParticipantCreateManyDrawInputEnvelope
    connect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
  }

  export type WinnerUncheckedCreateNestedManyWithoutDrawInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type DrawParticipantUncheckedCreateNestedManyWithoutDrawInput = {
    create?: XOR<DrawParticipantCreateWithoutDrawInput, DrawParticipantUncheckedCreateWithoutDrawInput> | DrawParticipantCreateWithoutDrawInput[] | DrawParticipantUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: DrawParticipantCreateOrConnectWithoutDrawInput | DrawParticipantCreateOrConnectWithoutDrawInput[]
    createMany?: DrawParticipantCreateManyDrawInputEnvelope
    connect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
  }

  export type EnumDrawStateFieldUpdateOperationsInput = {
    set?: $Enums.DrawState
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WinnerUpdateManyWithoutDrawNestedInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutDrawInput | WinnerUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutDrawInput | WinnerUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutDrawInput | WinnerUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type DrawParticipantUpdateManyWithoutDrawNestedInput = {
    create?: XOR<DrawParticipantCreateWithoutDrawInput, DrawParticipantUncheckedCreateWithoutDrawInput> | DrawParticipantCreateWithoutDrawInput[] | DrawParticipantUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: DrawParticipantCreateOrConnectWithoutDrawInput | DrawParticipantCreateOrConnectWithoutDrawInput[]
    upsert?: DrawParticipantUpsertWithWhereUniqueWithoutDrawInput | DrawParticipantUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: DrawParticipantCreateManyDrawInputEnvelope
    set?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    disconnect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    delete?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    connect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    update?: DrawParticipantUpdateWithWhereUniqueWithoutDrawInput | DrawParticipantUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: DrawParticipantUpdateManyWithWhereWithoutDrawInput | DrawParticipantUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: DrawParticipantScalarWhereInput | DrawParticipantScalarWhereInput[]
  }

  export type WinnerUncheckedUpdateManyWithoutDrawNestedInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutDrawInput | WinnerUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutDrawInput | WinnerUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutDrawInput | WinnerUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type DrawParticipantUncheckedUpdateManyWithoutDrawNestedInput = {
    create?: XOR<DrawParticipantCreateWithoutDrawInput, DrawParticipantUncheckedCreateWithoutDrawInput> | DrawParticipantCreateWithoutDrawInput[] | DrawParticipantUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: DrawParticipantCreateOrConnectWithoutDrawInput | DrawParticipantCreateOrConnectWithoutDrawInput[]
    upsert?: DrawParticipantUpsertWithWhereUniqueWithoutDrawInput | DrawParticipantUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: DrawParticipantCreateManyDrawInputEnvelope
    set?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    disconnect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    delete?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    connect?: DrawParticipantWhereUniqueInput | DrawParticipantWhereUniqueInput[]
    update?: DrawParticipantUpdateWithWhereUniqueWithoutDrawInput | DrawParticipantUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: DrawParticipantUpdateManyWithWhereWithoutDrawInput | DrawParticipantUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: DrawParticipantScalarWhereInput | DrawParticipantScalarWhereInput[]
  }

  export type DrawResultCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<DrawResultCreateWithoutParticipantsInput, DrawResultUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: DrawResultCreateOrConnectWithoutParticipantsInput
    connect?: DrawResultWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutDrawParticipationsInput = {
    create?: XOR<ProfileCreateWithoutDrawParticipationsInput, ProfileUncheckedCreateWithoutDrawParticipationsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutDrawParticipationsInput
    connect?: ProfileWhereUniqueInput
  }

  export type DrawResultUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<DrawResultCreateWithoutParticipantsInput, DrawResultUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: DrawResultCreateOrConnectWithoutParticipantsInput
    upsert?: DrawResultUpsertWithoutParticipantsInput
    connect?: DrawResultWhereUniqueInput
    update?: XOR<XOR<DrawResultUpdateToOneWithWhereWithoutParticipantsInput, DrawResultUpdateWithoutParticipantsInput>, DrawResultUncheckedUpdateWithoutParticipantsInput>
  }

  export type ProfileUpdateOneRequiredWithoutDrawParticipationsNestedInput = {
    create?: XOR<ProfileCreateWithoutDrawParticipationsInput, ProfileUncheckedCreateWithoutDrawParticipationsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutDrawParticipationsInput
    upsert?: ProfileUpsertWithoutDrawParticipationsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutDrawParticipationsInput, ProfileUpdateWithoutDrawParticipationsInput>, ProfileUncheckedUpdateWithoutDrawParticipationsInput>
  }

  export type DrawResultCreateNestedOneWithoutWinnersInput = {
    create?: XOR<DrawResultCreateWithoutWinnersInput, DrawResultUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: DrawResultCreateOrConnectWithoutWinnersInput
    connect?: DrawResultWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutWinningsInput = {
    create?: XOR<ProfileCreateWithoutWinningsInput, ProfileUncheckedCreateWithoutWinningsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWinningsInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumPayoutStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayoutStatus
  }

  export type DrawResultUpdateOneRequiredWithoutWinnersNestedInput = {
    create?: XOR<DrawResultCreateWithoutWinnersInput, DrawResultUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: DrawResultCreateOrConnectWithoutWinnersInput
    upsert?: DrawResultUpsertWithoutWinnersInput
    connect?: DrawResultWhereUniqueInput
    update?: XOR<XOR<DrawResultUpdateToOneWithWhereWithoutWinnersInput, DrawResultUpdateWithoutWinnersInput>, DrawResultUncheckedUpdateWithoutWinnersInput>
  }

  export type ProfileUpdateOneRequiredWithoutWinningsNestedInput = {
    create?: XOR<ProfileCreateWithoutWinningsInput, ProfileUncheckedCreateWithoutWinningsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWinningsInput
    upsert?: ProfileUpsertWithoutWinningsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutWinningsInput, ProfileUpdateWithoutWinningsInput>, ProfileUncheckedUpdateWithoutWinningsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumSubStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubStatus | EnumSubStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubStatus[]
    notIn?: $Enums.SubStatus[]
    not?: NestedEnumSubStatusFilter<$PrismaModel> | $Enums.SubStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumSubStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubStatus | EnumSubStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubStatus[]
    notIn?: $Enums.SubStatus[]
    not?: NestedEnumSubStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubStatusFilter<$PrismaModel>
    _max?: NestedEnumSubStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDrawStateFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawState | EnumDrawStateFieldRefInput<$PrismaModel>
    in?: $Enums.DrawState[]
    notIn?: $Enums.DrawState[]
    not?: NestedEnumDrawStateFilter<$PrismaModel> | $Enums.DrawState
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDrawStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawState | EnumDrawStateFieldRefInput<$PrismaModel>
    in?: $Enums.DrawState[]
    notIn?: $Enums.DrawState[]
    not?: NestedEnumDrawStateWithAggregatesFilter<$PrismaModel> | $Enums.DrawState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrawStateFilter<$PrismaModel>
    _max?: NestedEnumDrawStateFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[]
    notIn?: $Enums.PayoutStatus[]
    not?: NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus
  }

  export type NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[]
    notIn?: $Enums.PayoutStatus[]
    not?: NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutStatusFilter<$PrismaModel>
    _max?: NestedEnumPayoutStatusFilter<$PrismaModel>
  }

  export type ScoreCreateWithoutProfileInput = {
    id?: string
    value: number
    datePlayed: Date | string
    createdAt?: Date | string
  }

  export type ScoreUncheckedCreateWithoutProfileInput = {
    id?: string
    value: number
    datePlayed: Date | string
    createdAt?: Date | string
  }

  export type ScoreCreateOrConnectWithoutProfileInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutProfileInput, ScoreUncheckedCreateWithoutProfileInput>
  }

  export type ScoreCreateManyProfileInputEnvelope = {
    data: ScoreCreateManyProfileInput | ScoreCreateManyProfileInput[]
  }

  export type DrawParticipantCreateWithoutProfileInput = {
    id?: string
    lockedScores: string
    draw: DrawResultCreateNestedOneWithoutParticipantsInput
  }

  export type DrawParticipantUncheckedCreateWithoutProfileInput = {
    id?: string
    drawId: string
    lockedScores: string
  }

  export type DrawParticipantCreateOrConnectWithoutProfileInput = {
    where: DrawParticipantWhereUniqueInput
    create: XOR<DrawParticipantCreateWithoutProfileInput, DrawParticipantUncheckedCreateWithoutProfileInput>
  }

  export type DrawParticipantCreateManyProfileInputEnvelope = {
    data: DrawParticipantCreateManyProfileInput | DrawParticipantCreateManyProfileInput[]
  }

  export type WinnerCreateWithoutProfileInput = {
    id?: string
    matchCount: number
    prizeAmount: number
    proofImageUrl?: string | null
    status?: $Enums.PayoutStatus
    draw: DrawResultCreateNestedOneWithoutWinnersInput
  }

  export type WinnerUncheckedCreateWithoutProfileInput = {
    id?: string
    drawId: string
    matchCount: number
    prizeAmount: number
    proofImageUrl?: string | null
    status?: $Enums.PayoutStatus
  }

  export type WinnerCreateOrConnectWithoutProfileInput = {
    where: WinnerWhereUniqueInput
    create: XOR<WinnerCreateWithoutProfileInput, WinnerUncheckedCreateWithoutProfileInput>
  }

  export type WinnerCreateManyProfileInputEnvelope = {
    data: WinnerCreateManyProfileInput | WinnerCreateManyProfileInput[]
  }

  export type CharityCreateWithoutSupportersInput = {
    id?: string
    name: string
    description: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type CharityUncheckedCreateWithoutSupportersInput = {
    id?: string
    name: string
    description: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type CharityCreateOrConnectWithoutSupportersInput = {
    where: CharityWhereUniqueInput
    create: XOR<CharityCreateWithoutSupportersInput, CharityUncheckedCreateWithoutSupportersInput>
  }

  export type ScoreUpsertWithWhereUniqueWithoutProfileInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutProfileInput, ScoreUncheckedUpdateWithoutProfileInput>
    create: XOR<ScoreCreateWithoutProfileInput, ScoreUncheckedCreateWithoutProfileInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutProfileInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutProfileInput, ScoreUncheckedUpdateWithoutProfileInput>
  }

  export type ScoreUpdateManyWithWhereWithoutProfileInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutProfileInput>
  }

  export type ScoreScalarWhereInput = {
    AND?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    OR?: ScoreScalarWhereInput[]
    NOT?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    id?: StringFilter<"Score"> | string
    profileId?: StringFilter<"Score"> | string
    value?: IntFilter<"Score"> | number
    datePlayed?: DateTimeFilter<"Score"> | Date | string
    createdAt?: DateTimeFilter<"Score"> | Date | string
  }

  export type DrawParticipantUpsertWithWhereUniqueWithoutProfileInput = {
    where: DrawParticipantWhereUniqueInput
    update: XOR<DrawParticipantUpdateWithoutProfileInput, DrawParticipantUncheckedUpdateWithoutProfileInput>
    create: XOR<DrawParticipantCreateWithoutProfileInput, DrawParticipantUncheckedCreateWithoutProfileInput>
  }

  export type DrawParticipantUpdateWithWhereUniqueWithoutProfileInput = {
    where: DrawParticipantWhereUniqueInput
    data: XOR<DrawParticipantUpdateWithoutProfileInput, DrawParticipantUncheckedUpdateWithoutProfileInput>
  }

  export type DrawParticipantUpdateManyWithWhereWithoutProfileInput = {
    where: DrawParticipantScalarWhereInput
    data: XOR<DrawParticipantUpdateManyMutationInput, DrawParticipantUncheckedUpdateManyWithoutProfileInput>
  }

  export type DrawParticipantScalarWhereInput = {
    AND?: DrawParticipantScalarWhereInput | DrawParticipantScalarWhereInput[]
    OR?: DrawParticipantScalarWhereInput[]
    NOT?: DrawParticipantScalarWhereInput | DrawParticipantScalarWhereInput[]
    id?: StringFilter<"DrawParticipant"> | string
    drawId?: StringFilter<"DrawParticipant"> | string
    profileId?: StringFilter<"DrawParticipant"> | string
    lockedScores?: StringFilter<"DrawParticipant"> | string
  }

  export type WinnerUpsertWithWhereUniqueWithoutProfileInput = {
    where: WinnerWhereUniqueInput
    update: XOR<WinnerUpdateWithoutProfileInput, WinnerUncheckedUpdateWithoutProfileInput>
    create: XOR<WinnerCreateWithoutProfileInput, WinnerUncheckedCreateWithoutProfileInput>
  }

  export type WinnerUpdateWithWhereUniqueWithoutProfileInput = {
    where: WinnerWhereUniqueInput
    data: XOR<WinnerUpdateWithoutProfileInput, WinnerUncheckedUpdateWithoutProfileInput>
  }

  export type WinnerUpdateManyWithWhereWithoutProfileInput = {
    where: WinnerScalarWhereInput
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyWithoutProfileInput>
  }

  export type WinnerScalarWhereInput = {
    AND?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
    OR?: WinnerScalarWhereInput[]
    NOT?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
    id?: StringFilter<"Winner"> | string
    drawId?: StringFilter<"Winner"> | string
    profileId?: StringFilter<"Winner"> | string
    matchCount?: IntFilter<"Winner"> | number
    prizeAmount?: FloatFilter<"Winner"> | number
    proofImageUrl?: StringNullableFilter<"Winner"> | string | null
    status?: EnumPayoutStatusFilter<"Winner"> | $Enums.PayoutStatus
  }

  export type CharityUpsertWithoutSupportersInput = {
    update: XOR<CharityUpdateWithoutSupportersInput, CharityUncheckedUpdateWithoutSupportersInput>
    create: XOR<CharityCreateWithoutSupportersInput, CharityUncheckedCreateWithoutSupportersInput>
    where?: CharityWhereInput
  }

  export type CharityUpdateToOneWithWhereWithoutSupportersInput = {
    where?: CharityWhereInput
    data: XOR<CharityUpdateWithoutSupportersInput, CharityUncheckedUpdateWithoutSupportersInput>
  }

  export type CharityUpdateWithoutSupportersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityUncheckedUpdateWithoutSupportersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateWithoutScoresInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    charityPercentage?: number
    drawParticipations?: DrawParticipantCreateNestedManyWithoutProfileInput
    winnings?: WinnerCreateNestedManyWithoutProfileInput
    selectedCharity?: CharityCreateNestedOneWithoutSupportersInput
  }

  export type ProfileUncheckedCreateWithoutScoresInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedCharityId?: string | null
    charityPercentage?: number
    drawParticipations?: DrawParticipantUncheckedCreateNestedManyWithoutProfileInput
    winnings?: WinnerUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutScoresInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutScoresInput, ProfileUncheckedCreateWithoutScoresInput>
  }

  export type ProfileUpsertWithoutScoresInput = {
    update: XOR<ProfileUpdateWithoutScoresInput, ProfileUncheckedUpdateWithoutScoresInput>
    create: XOR<ProfileCreateWithoutScoresInput, ProfileUncheckedCreateWithoutScoresInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutScoresInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutScoresInput, ProfileUncheckedUpdateWithoutScoresInput>
  }

  export type ProfileUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charityPercentage?: FloatFieldUpdateOperationsInput | number
    drawParticipations?: DrawParticipantUpdateManyWithoutProfileNestedInput
    winnings?: WinnerUpdateManyWithoutProfileNestedInput
    selectedCharity?: CharityUpdateOneWithoutSupportersNestedInput
  }

  export type ProfileUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedCharityId?: NullableStringFieldUpdateOperationsInput | string | null
    charityPercentage?: FloatFieldUpdateOperationsInput | number
    drawParticipations?: DrawParticipantUncheckedUpdateManyWithoutProfileNestedInput
    winnings?: WinnerUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutSelectedCharityInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    charityPercentage?: number
    scores?: ScoreCreateNestedManyWithoutProfileInput
    drawParticipations?: DrawParticipantCreateNestedManyWithoutProfileInput
    winnings?: WinnerCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutSelectedCharityInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    charityPercentage?: number
    scores?: ScoreUncheckedCreateNestedManyWithoutProfileInput
    drawParticipations?: DrawParticipantUncheckedCreateNestedManyWithoutProfileInput
    winnings?: WinnerUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutSelectedCharityInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSelectedCharityInput, ProfileUncheckedCreateWithoutSelectedCharityInput>
  }

  export type ProfileCreateManySelectedCharityInputEnvelope = {
    data: ProfileCreateManySelectedCharityInput | ProfileCreateManySelectedCharityInput[]
  }

  export type ProfileUpsertWithWhereUniqueWithoutSelectedCharityInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutSelectedCharityInput, ProfileUncheckedUpdateWithoutSelectedCharityInput>
    create: XOR<ProfileCreateWithoutSelectedCharityInput, ProfileUncheckedCreateWithoutSelectedCharityInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutSelectedCharityInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutSelectedCharityInput, ProfileUncheckedUpdateWithoutSelectedCharityInput>
  }

  export type ProfileUpdateManyWithWhereWithoutSelectedCharityInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutSelectedCharityInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    OR?: ProfileScalarWhereInput[]
    NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    id?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    firstName?: StringNullableFilter<"Profile"> | string | null
    lastName?: StringNullableFilter<"Profile"> | string | null
    role?: EnumRoleFilter<"Profile"> | $Enums.Role
    subscriptionStatus?: EnumSubStatusFilter<"Profile"> | $Enums.SubStatus
    stripeCustomerId?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    selectedCharityId?: StringNullableFilter<"Profile"> | string | null
    charityPercentage?: FloatFilter<"Profile"> | number
  }

  export type WinnerCreateWithoutDrawInput = {
    id?: string
    matchCount: number
    prizeAmount: number
    proofImageUrl?: string | null
    status?: $Enums.PayoutStatus
    profile: ProfileCreateNestedOneWithoutWinningsInput
  }

  export type WinnerUncheckedCreateWithoutDrawInput = {
    id?: string
    profileId: string
    matchCount: number
    prizeAmount: number
    proofImageUrl?: string | null
    status?: $Enums.PayoutStatus
  }

  export type WinnerCreateOrConnectWithoutDrawInput = {
    where: WinnerWhereUniqueInput
    create: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput>
  }

  export type WinnerCreateManyDrawInputEnvelope = {
    data: WinnerCreateManyDrawInput | WinnerCreateManyDrawInput[]
  }

  export type DrawParticipantCreateWithoutDrawInput = {
    id?: string
    lockedScores: string
    profile: ProfileCreateNestedOneWithoutDrawParticipationsInput
  }

  export type DrawParticipantUncheckedCreateWithoutDrawInput = {
    id?: string
    profileId: string
    lockedScores: string
  }

  export type DrawParticipantCreateOrConnectWithoutDrawInput = {
    where: DrawParticipantWhereUniqueInput
    create: XOR<DrawParticipantCreateWithoutDrawInput, DrawParticipantUncheckedCreateWithoutDrawInput>
  }

  export type DrawParticipantCreateManyDrawInputEnvelope = {
    data: DrawParticipantCreateManyDrawInput | DrawParticipantCreateManyDrawInput[]
  }

  export type WinnerUpsertWithWhereUniqueWithoutDrawInput = {
    where: WinnerWhereUniqueInput
    update: XOR<WinnerUpdateWithoutDrawInput, WinnerUncheckedUpdateWithoutDrawInput>
    create: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput>
  }

  export type WinnerUpdateWithWhereUniqueWithoutDrawInput = {
    where: WinnerWhereUniqueInput
    data: XOR<WinnerUpdateWithoutDrawInput, WinnerUncheckedUpdateWithoutDrawInput>
  }

  export type WinnerUpdateManyWithWhereWithoutDrawInput = {
    where: WinnerScalarWhereInput
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyWithoutDrawInput>
  }

  export type DrawParticipantUpsertWithWhereUniqueWithoutDrawInput = {
    where: DrawParticipantWhereUniqueInput
    update: XOR<DrawParticipantUpdateWithoutDrawInput, DrawParticipantUncheckedUpdateWithoutDrawInput>
    create: XOR<DrawParticipantCreateWithoutDrawInput, DrawParticipantUncheckedCreateWithoutDrawInput>
  }

  export type DrawParticipantUpdateWithWhereUniqueWithoutDrawInput = {
    where: DrawParticipantWhereUniqueInput
    data: XOR<DrawParticipantUpdateWithoutDrawInput, DrawParticipantUncheckedUpdateWithoutDrawInput>
  }

  export type DrawParticipantUpdateManyWithWhereWithoutDrawInput = {
    where: DrawParticipantScalarWhereInput
    data: XOR<DrawParticipantUpdateManyMutationInput, DrawParticipantUncheckedUpdateManyWithoutDrawInput>
  }

  export type DrawResultCreateWithoutParticipantsInput = {
    id?: string
    monthYear: string
    poolTotal: number
    winningNumbers: string
    status?: $Enums.DrawState
    createdAt?: Date | string
    executedAt?: Date | string | null
    winners?: WinnerCreateNestedManyWithoutDrawInput
  }

  export type DrawResultUncheckedCreateWithoutParticipantsInput = {
    id?: string
    monthYear: string
    poolTotal: number
    winningNumbers: string
    status?: $Enums.DrawState
    createdAt?: Date | string
    executedAt?: Date | string | null
    winners?: WinnerUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawResultCreateOrConnectWithoutParticipantsInput = {
    where: DrawResultWhereUniqueInput
    create: XOR<DrawResultCreateWithoutParticipantsInput, DrawResultUncheckedCreateWithoutParticipantsInput>
  }

  export type ProfileCreateWithoutDrawParticipationsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    charityPercentage?: number
    scores?: ScoreCreateNestedManyWithoutProfileInput
    winnings?: WinnerCreateNestedManyWithoutProfileInput
    selectedCharity?: CharityCreateNestedOneWithoutSupportersInput
  }

  export type ProfileUncheckedCreateWithoutDrawParticipationsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedCharityId?: string | null
    charityPercentage?: number
    scores?: ScoreUncheckedCreateNestedManyWithoutProfileInput
    winnings?: WinnerUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutDrawParticipationsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutDrawParticipationsInput, ProfileUncheckedCreateWithoutDrawParticipationsInput>
  }

  export type DrawResultUpsertWithoutParticipantsInput = {
    update: XOR<DrawResultUpdateWithoutParticipantsInput, DrawResultUncheckedUpdateWithoutParticipantsInput>
    create: XOR<DrawResultCreateWithoutParticipantsInput, DrawResultUncheckedCreateWithoutParticipantsInput>
    where?: DrawResultWhereInput
  }

  export type DrawResultUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: DrawResultWhereInput
    data: XOR<DrawResultUpdateWithoutParticipantsInput, DrawResultUncheckedUpdateWithoutParticipantsInput>
  }

  export type DrawResultUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthYear?: StringFieldUpdateOperationsInput | string
    poolTotal?: FloatFieldUpdateOperationsInput | number
    winningNumbers?: StringFieldUpdateOperationsInput | string
    status?: EnumDrawStateFieldUpdateOperationsInput | $Enums.DrawState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winners?: WinnerUpdateManyWithoutDrawNestedInput
  }

  export type DrawResultUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthYear?: StringFieldUpdateOperationsInput | string
    poolTotal?: FloatFieldUpdateOperationsInput | number
    winningNumbers?: StringFieldUpdateOperationsInput | string
    status?: EnumDrawStateFieldUpdateOperationsInput | $Enums.DrawState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winners?: WinnerUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type ProfileUpsertWithoutDrawParticipationsInput = {
    update: XOR<ProfileUpdateWithoutDrawParticipationsInput, ProfileUncheckedUpdateWithoutDrawParticipationsInput>
    create: XOR<ProfileCreateWithoutDrawParticipationsInput, ProfileUncheckedCreateWithoutDrawParticipationsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutDrawParticipationsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutDrawParticipationsInput, ProfileUncheckedUpdateWithoutDrawParticipationsInput>
  }

  export type ProfileUpdateWithoutDrawParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charityPercentage?: FloatFieldUpdateOperationsInput | number
    scores?: ScoreUpdateManyWithoutProfileNestedInput
    winnings?: WinnerUpdateManyWithoutProfileNestedInput
    selectedCharity?: CharityUpdateOneWithoutSupportersNestedInput
  }

  export type ProfileUncheckedUpdateWithoutDrawParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedCharityId?: NullableStringFieldUpdateOperationsInput | string | null
    charityPercentage?: FloatFieldUpdateOperationsInput | number
    scores?: ScoreUncheckedUpdateManyWithoutProfileNestedInput
    winnings?: WinnerUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type DrawResultCreateWithoutWinnersInput = {
    id?: string
    monthYear: string
    poolTotal: number
    winningNumbers: string
    status?: $Enums.DrawState
    createdAt?: Date | string
    executedAt?: Date | string | null
    participants?: DrawParticipantCreateNestedManyWithoutDrawInput
  }

  export type DrawResultUncheckedCreateWithoutWinnersInput = {
    id?: string
    monthYear: string
    poolTotal: number
    winningNumbers: string
    status?: $Enums.DrawState
    createdAt?: Date | string
    executedAt?: Date | string | null
    participants?: DrawParticipantUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawResultCreateOrConnectWithoutWinnersInput = {
    where: DrawResultWhereUniqueInput
    create: XOR<DrawResultCreateWithoutWinnersInput, DrawResultUncheckedCreateWithoutWinnersInput>
  }

  export type ProfileCreateWithoutWinningsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    charityPercentage?: number
    scores?: ScoreCreateNestedManyWithoutProfileInput
    drawParticipations?: DrawParticipantCreateNestedManyWithoutProfileInput
    selectedCharity?: CharityCreateNestedOneWithoutSupportersInput
  }

  export type ProfileUncheckedCreateWithoutWinningsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedCharityId?: string | null
    charityPercentage?: number
    scores?: ScoreUncheckedCreateNestedManyWithoutProfileInput
    drawParticipations?: DrawParticipantUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutWinningsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutWinningsInput, ProfileUncheckedCreateWithoutWinningsInput>
  }

  export type DrawResultUpsertWithoutWinnersInput = {
    update: XOR<DrawResultUpdateWithoutWinnersInput, DrawResultUncheckedUpdateWithoutWinnersInput>
    create: XOR<DrawResultCreateWithoutWinnersInput, DrawResultUncheckedCreateWithoutWinnersInput>
    where?: DrawResultWhereInput
  }

  export type DrawResultUpdateToOneWithWhereWithoutWinnersInput = {
    where?: DrawResultWhereInput
    data: XOR<DrawResultUpdateWithoutWinnersInput, DrawResultUncheckedUpdateWithoutWinnersInput>
  }

  export type DrawResultUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthYear?: StringFieldUpdateOperationsInput | string
    poolTotal?: FloatFieldUpdateOperationsInput | number
    winningNumbers?: StringFieldUpdateOperationsInput | string
    status?: EnumDrawStateFieldUpdateOperationsInput | $Enums.DrawState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: DrawParticipantUpdateManyWithoutDrawNestedInput
  }

  export type DrawResultUncheckedUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthYear?: StringFieldUpdateOperationsInput | string
    poolTotal?: FloatFieldUpdateOperationsInput | number
    winningNumbers?: StringFieldUpdateOperationsInput | string
    status?: EnumDrawStateFieldUpdateOperationsInput | $Enums.DrawState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: DrawParticipantUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type ProfileUpsertWithoutWinningsInput = {
    update: XOR<ProfileUpdateWithoutWinningsInput, ProfileUncheckedUpdateWithoutWinningsInput>
    create: XOR<ProfileCreateWithoutWinningsInput, ProfileUncheckedCreateWithoutWinningsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutWinningsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutWinningsInput, ProfileUncheckedUpdateWithoutWinningsInput>
  }

  export type ProfileUpdateWithoutWinningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charityPercentage?: FloatFieldUpdateOperationsInput | number
    scores?: ScoreUpdateManyWithoutProfileNestedInput
    drawParticipations?: DrawParticipantUpdateManyWithoutProfileNestedInput
    selectedCharity?: CharityUpdateOneWithoutSupportersNestedInput
  }

  export type ProfileUncheckedUpdateWithoutWinningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedCharityId?: NullableStringFieldUpdateOperationsInput | string | null
    charityPercentage?: FloatFieldUpdateOperationsInput | number
    scores?: ScoreUncheckedUpdateManyWithoutProfileNestedInput
    drawParticipations?: DrawParticipantUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ScoreCreateManyProfileInput = {
    id?: string
    value: number
    datePlayed: Date | string
    createdAt?: Date | string
  }

  export type DrawParticipantCreateManyProfileInput = {
    id?: string
    drawId: string
    lockedScores: string
  }

  export type WinnerCreateManyProfileInput = {
    id?: string
    drawId: string
    matchCount: number
    prizeAmount: number
    proofImageUrl?: string | null
    status?: $Enums.PayoutStatus
  }

  export type ScoreUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawParticipantUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    lockedScores?: StringFieldUpdateOperationsInput | string
    draw?: DrawResultUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type DrawParticipantUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    lockedScores?: StringFieldUpdateOperationsInput | string
  }

  export type DrawParticipantUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    lockedScores?: StringFieldUpdateOperationsInput | string
  }

  export type WinnerUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchCount?: IntFieldUpdateOperationsInput | number
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    draw?: DrawResultUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type WinnerUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    matchCount?: IntFieldUpdateOperationsInput | number
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
  }

  export type WinnerUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    matchCount?: IntFieldUpdateOperationsInput | number
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
  }

  export type ProfileCreateManySelectedCharityInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.Role
    subscriptionStatus?: $Enums.SubStatus
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    charityPercentage?: number
  }

  export type ProfileUpdateWithoutSelectedCharityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charityPercentage?: FloatFieldUpdateOperationsInput | number
    scores?: ScoreUpdateManyWithoutProfileNestedInput
    drawParticipations?: DrawParticipantUpdateManyWithoutProfileNestedInput
    winnings?: WinnerUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSelectedCharityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charityPercentage?: FloatFieldUpdateOperationsInput | number
    scores?: ScoreUncheckedUpdateManyWithoutProfileNestedInput
    drawParticipations?: DrawParticipantUncheckedUpdateManyWithoutProfileNestedInput
    winnings?: WinnerUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutSelectedCharityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptionStatus?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charityPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type WinnerCreateManyDrawInput = {
    id?: string
    profileId: string
    matchCount: number
    prizeAmount: number
    proofImageUrl?: string | null
    status?: $Enums.PayoutStatus
  }

  export type DrawParticipantCreateManyDrawInput = {
    id?: string
    profileId: string
    lockedScores: string
  }

  export type WinnerUpdateWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchCount?: IntFieldUpdateOperationsInput | number
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    profile?: ProfileUpdateOneRequiredWithoutWinningsNestedInput
  }

  export type WinnerUncheckedUpdateWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    matchCount?: IntFieldUpdateOperationsInput | number
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
  }

  export type WinnerUncheckedUpdateManyWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    matchCount?: IntFieldUpdateOperationsInput | number
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
  }

  export type DrawParticipantUpdateWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    lockedScores?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneRequiredWithoutDrawParticipationsNestedInput
  }

  export type DrawParticipantUncheckedUpdateWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    lockedScores?: StringFieldUpdateOperationsInput | string
  }

  export type DrawParticipantUncheckedUpdateManyWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    lockedScores?: StringFieldUpdateOperationsInput | string
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